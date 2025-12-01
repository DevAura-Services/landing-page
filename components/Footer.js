import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.svg" alt="Devaura Logo" className="w-10 h-10" />
                            <span className="text-xl font-bold text-white">Devaura</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with cutting-edge DevOps and MLOps solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 Devaura. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
