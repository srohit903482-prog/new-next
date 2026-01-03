"use client";

import { useState, useRef, useEffect } from 'react';
import { useChat } from './ChatProvider';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'agent';
    timestamp: Date;
}

export default function ChatWidget() {
    const { isOpen, toggleChat, closeChat } = useChat();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hello! Welcome to Printer Support. How can I help you today?',
            sender: 'agent',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate agent response
        setTimeout(() => {
            const responses = [
                "I understand you're having issues with your printer. Could you please specify the brand and model?",
                "Have you tried checking if the printer is properly connected to the network?",
                "I can definitely help with that. Are you seeing any error codes on the display?",
                "Let me connect you with a specialized technician for this issue.",
                "Please try restarting your printer and router, does that help?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const agentMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: 'agent',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, agentMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Chat Button (Only visible when chat is closed) */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="fixed bottom-16 right-6 z-50 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-medium-blue transition-colors duration-300 flex items-center justify-center w-14 h-14"
                    aria-label="Open Chat"
                >
                    <i className="fas fa-comment-dots text-xl"></i>
                </button>
            )}

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-light-gray transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
            >
                {/* Chat Header */}
                <div className="bg-professional-navy text-white p-4 rounded-t-xl flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-white text-professional-navy p-1 rounded-full">
                            <i className="fas fa-headset text-sm"></i>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Printer Support</h3>
                            <p className="text-xs text-gray-300">Online | Average reply: 1m</p>
                        </div>
                    </div>
                    <button onClick={closeChat} className="text-gray-300 hover:text-white">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-4 bg-soft-white space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user'
                                        ? 'bg-medium-blue text-white rounded-br-none'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-light-gray">
                    <form onSubmit={handleSend} className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-medium-blue focus:ring-1 focus:ring-medium-blue"
                        />
                        <button
                            type="submit"
                            className="bg-medium-blue text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-professional-navy transition-colors disabled:opacity-50"
                            disabled={!input.trim()}
                        >
                            <i className="fas fa-paper-plane text-xs"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
