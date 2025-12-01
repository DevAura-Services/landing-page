'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        // Here you would typically send the data to an API
    };

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Text */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Together</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Whether you have a question about our services or want to discuss a project, we're ready to help.
                        </p>

                        <div className="space-y-8">
                            <div className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Schedule a Free Consultation</h3>
                                <p className="text-gray-400 mb-6">
                                    Schedule a free 30-minute call with our DevOps experts to discuss your specific needs.
                                </p>
                                <button className="w-full bg-[#1e293b] hover:bg-[#2d3b4e] border border-white/10 text-white py-3 rounded-lg font-medium transition-colors">
                                    Schedule Now
                                </button>
                            </div>

                            <div className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Other Ways to Connect</h3>
                                <p className="text-gray-400 mb-2">Reach out to us directly or follow our journey on social media.</p>
                                <a href="mailto:contact@devaura.com" className="text-blue-500 hover:text-blue-400 block mb-4">contact@devaura.com</a>
                                <div className="flex gap-4 text-2xl text-gray-400">
                                    <a href="#" className="hover:text-white transition-colors">in</a>
                                    <a href="#" className="hover:text-white transition-colors">git</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-[#1e293b]/20 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Company</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Inquiry Type</label>
                                    <select
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                        value={formData.inquiryType}
                                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Project Proposal</option>
                                        <option>Partnership</option>
                                        <option>Careers</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    placeholder="How can we help?"
                                    rows="4"
                                    className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
