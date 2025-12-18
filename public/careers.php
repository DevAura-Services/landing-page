<?php
// Prevent direct access
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

header('Content-Type: application/json');

// --- Configuration ---
$to_email = "careers@devaura.pro";
$subject_prefix = "[DevAura Job Application]";

// --- Input Sanitization ---
$jobTitle = isset($_POST['jobTitle']) ? strip_tags(trim($_POST['jobTitle'])) : 'General Application';
$fullName = isset($_POST['fullName']) ? strip_tags(trim($_POST['fullName'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$linkedin = isset($_POST['linkedin']) ? strip_tags(trim($_POST['linkedin'])) : '';
$portfolio = isset($_POST['portfolio']) ? strip_tags(trim($_POST['portfolio'])) : '';
$yearsExp = isset($_POST['yearsExp']) ? strip_tags(trim($_POST['yearsExp'])) : '';
$currentCompany = isset($_POST['currentCompany']) ? strip_tags(trim($_POST['currentCompany'])) : '';
$noticePeriod = isset($_POST['noticePeriod']) ? strip_tags(trim($_POST['noticePeriod'])) : '';
$whyFit = isset($_POST['whyFit']) ? strip_tags(trim($_POST['whyFit'])) : '';

if (empty($fullName) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
    exit;
}

// --- Email Body Construction ---
$message_text = "New Job Application for: $jobTitle\n\n";
$message_text .= "Name: $fullName\n";
$message_text .= "Email: $email\n";
$message_text .= "Phone: $phone\n";
$message_text .= "LinkedIn: $linkedin\n";
$message_text .= "Portfolio: $portfolio\n";
$message_text .= "Experience: $yearsExp years\n";
$message_text .= "Current Company: $currentCompany\n";
$message_text .= "Notice Period: $noticePeriod\n\n";
$message_text .= "Why Fit:\n$whyFit\n";

// --- Boundary & Headers ---
$boundary = md5(time());
$headers = "From: Devaura Careers <careers@devaura.pro>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// --- Multipart Logic ---

// 1. Text Body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $message_text . "\r\n";

// 2. Attachments
$files = ['resume', 'coverLetter'];

foreach ($files as $fileKey) {
    if (isset($_FILES[$fileKey]) && $_FILES[$fileKey]['error'] === UPLOAD_ERR_OK) {
        $fileName = $_FILES[$fileKey]['name'];
        $fileType = $_FILES[$fileKey]['type'];
        $fileTmpName = $_FILES[$fileKey]['tmp_name'];
        
        // Read file content
        $content = file_get_contents($fileTmpName);
        $encoded_content = chunk_split(base64_encode($content));
        
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $encoded_content . "\r\n";
    }
}

$body .= "--$boundary--";

// --- Sending ---
$subject = "$subject_prefix $jobTitle - $fullName";

if (mail($to_email, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Application submitted successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send application."]);
}
?>
