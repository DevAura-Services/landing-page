<?php
// Prevent direct access to the script (security)
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// Headers for CORS (if needed during dev, can be tightened for prod) -> Actually for same-origin it's fine.
// But returning JSON is important.
header('Content-Type: application/json');

// --- Configuration ---
$to_email = "contact@devaura.pro";
$subject_prefix = "[DevAura Contact Form]";

// --- Input Sanitization & Validation ---

// Get data from $_POST (standard form submission)
// Note: If sending JSON body from React, we'd use php://input. 
// However, FormData objects in JS send as 'multipart/form-data' or 'application/x-www-form-urlencoded', 
// which populates $_POST.

$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$company = isset($_POST['company']) ? strip_tags(trim($_POST['company'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$inquiryType = isset($_POST['inquiryType']) ? strip_tags(trim($_POST['inquiryType'])) : 'General';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Basic Anti-Spam (Honeypot or simply check empty requireds)
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields locally."]);
    exit;
}

// --- Email Construction ---

$email_subject = "$subject_prefix New inquiry from $name - $inquiryType";

$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Company: $company\n";
$email_body .= "Email: $email\n";
$email_body .= "Inquiry Type: $inquiryType\n\n";
$email_body .= "Message:\n$message\n";

// Headers
$headers = "From: Devaura Contact <contact@devaura.pro>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// --- Sending ---

if (mail($to_email, $email_subject, $email_body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email. Please try again later."]);
}
?>
