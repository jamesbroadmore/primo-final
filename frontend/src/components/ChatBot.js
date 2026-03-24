import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minus } from 'lucide-react';

const API = process.env.REACT_APP_BACKEND_URL;

function genSessionId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [sessionId] = useState(genSessionId);
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: "Hi! I'm Alex, your Primo Pools tiling consultant. Tell me about your pool and I'll help you find the perfect tiles and provide a rough estimate. What type of project are you considering?",
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(m => ({ role: m.role, content: m.content })), sessionId }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I\'m having trouble connecting. Please call us on (08) 9331 8998.' }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  if (!open) return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-trigger">
      <button onClick={() => setOpen(true)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #C9A44A, #E8D4A0)' }}
        aria-label="Open AI consultant">
        <MessageCircle size={24} className="text-[#0A0A0A]" />
      </button>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#08090E] animate-pulse" />
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col" style={{ width: 380 }} data-testid="chatbot-window">
      <div className="rounded-xl overflow-hidden shadow-2xl flex flex-col" style={{
        background: '#0F1420', border: '1px solid rgba(201,164,74,0.2)',
        maxHeight: minimized ? 64 : 520,
        transition: 'max-height 0.3s ease',
      }}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #C9A44A, #A8832A)' }}>
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-[#0A0A0A]" />
            <div>
              <p className="font-semibold text-[#0A0A0A] text-sm">Alex — Tiling Consultant</p>
              <p className="text-[#0A0A0A]/70 text-xs">Primo Pools AI</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button onClick={() => setMinimized(!minimized)} className="p-1.5 rounded hover:bg-black/10 transition-colors" aria-label="Minimize">
              <Minus size={14} className="text-[#0A0A0A]" />
            </button>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded hover:bg-black/10 transition-colors" aria-label="Close chat">
              <X size={14} className="text-[#0A0A0A]" />
            </button>
          </div>
        </div>

        {/* Messages */}
        {!minimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 360 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    m.role === 'assistant'
                      ? 'bg-[#C9A44A]'
                      : 'bg-[rgba(240,237,232,0.15)]'
                  }`}>
                    {m.role === 'assistant' ? <Bot size={13} className="text-[#0A0A0A]" /> : <User size={13} className="text-[#F0EDE8]" />}
                  </div>
                  <div className={`max-w-[82%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'text-[#F0EDE8] rounded-tr-sm'
                      : 'text-[#F0EDE8] rounded-tl-sm'
                  }`} style={{
                    background: m.role === 'user' ? '#C9A44A22' : 'rgba(255,255,255,0.05)',
                    border: '1px solid',
                    borderColor: m.role === 'user' ? 'rgba(201,164,74,0.3)' : 'rgba(240,237,232,0.08)',
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#C9A44A] flex items-center justify-center flex-shrink-0">
                    <Bot size={13} className="text-[#0A0A0A]" />
                  </div>
                  <div className="px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(240,237,232,0.08)' }}>
                    <div className="flex gap-1">
                      {[0, 0.15, 0.3].map((d, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[rgba(201,164,74,0.6)] animate-bounce" style={{ animationDelay: `${d}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[rgba(240,237,232,0.08)]">
              <div className="flex gap-2">
                <input
                  data-testid="chatbot-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Ask about tiles, pricing, or your pool..."
                  disabled={loading}
                  className="flex-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(240,237,232,0.12)] rounded-lg px-3 py-2 text-sm text-[#F0EDE8] placeholder-[rgba(240,237,232,0.3)] outline-none focus:border-[#C9A44A] transition-colors"
                />
                <button
                  data-testid="chatbot-send-btn"
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all disabled:opacity-40"
                  style={{ background: '#C9A44A' }}
                  aria-label="Send message"
                >
                  <Send size={14} className="text-[#0A0A0A]" />
                </button>
              </div>
              <p className="text-center text-xs mt-2" style={{ color: 'rgba(240,237,232,0.25)' }}>
                Powered by AI · Primo Pools Consultant
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
