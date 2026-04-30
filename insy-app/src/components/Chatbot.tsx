'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Bonjour ! Je suis votre consultant IA IN'SY. Je peux vous aider à identifier vos besoins en intelligence artificielle. Dans quel secteur travaillez-vous ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Merci pour cette information. Pouvez-vous me décrire votre niveau de maturité en IA ? (1 = Débutant, 5 = Expert)",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-bold shadow-[0_20px_40px_rgba(77,217,255,0.25)] z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        id="chatbot"
      >
        💬
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[520px] bg-[#10151f]/95 ring-1 ring-accent/20 shadow-[0_35px_90px_-45px_rgba(0,212,255,0.75)] backdrop-blur-xl rounded-[32px] z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,212,255,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(138,103,255,0.12),transparent_35%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-[#9f7dff] to-[#ffffff] opacity-70" />

            <div className="relative z-10 bg-[#0c111a]/90 text-primary p-4 rounded-t-[32px] flex items-center justify-between gap-3 border-b border-accent/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-3xl bg-accent/20 border border-accent/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.25)]">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-white">Consultant IA IN'SY</h3>
                  <p className="text-sm text-muted">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-[28px] border ${
                      message.isBot
                        ? 'bg-[#122036] border-white/5 text-white'
                        : 'bg-accent/95 border-accent text-primary'
                    }`}
                  >
                    <p className="text-sm leading-6">{message.content}</p>
                    <p className="text-[11px] opacity-60 mt-3 text-right">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-[#122036] p-3 rounded-[24px] border border-accent/20">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-accent rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-accent rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="relative z-10 p-4 border-t border-white/10 bg-[#0d1220]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-[#101622] border border-white/10 rounded-3xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent/50"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="rounded-3xl bg-gradient-to-r from-accent to-[#9f7dff] px-5 py-3 text-primary font-semibold shadow-[0_20px_60px_-45px_rgba(0,212,255,0.75)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:brightness-110"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
