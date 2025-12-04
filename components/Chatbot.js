'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const [messages, setMessages] = useState([
        { text: t('chatbot.greeting'), sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { text: input, sender: 'user' }]);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: t('chatbot.response'),
                sender: 'bot'
            }]);
        }, 1000);

        setInput('');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="bg-blue-600 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">D</div>
                        <div>
                            <h3 className="text-white font-bold text-sm">{t('chatbot.assistant')}</h3>
                            <p className="text-blue-100 text-xs">{t('chatbot.online')}</p>
                        </div>
                    </div>

                    <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4 bg-[#0a0e17]">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-[#1e293b] text-gray-300 rounded-bl-none border border-white/5'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSend} className="p-4 bg-[#1e293b] border-t border-white/5">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder={t('chatbot.placeholder')}
                                className="flex-1 bg-[#0a0e17] border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
