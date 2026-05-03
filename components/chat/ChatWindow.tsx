"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

export function ChatWindow() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Hello! I am the KilnSense AI Assistant. I can help you understand the Pakistan NEQS 2010 regulations, suggest mitigation strategies for your brick kiln, or explain EPA reporting formats. How can I assist you today?' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages })
      });
      
      const data = await response.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered a network error while trying to reach the Groq API.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass rounded-2xl border border-white/60 overflow-hidden flex flex-col h-[600px] shadow-sm">
      <div className="flex-grow overflow-y-auto p-6 space-y-6" ref={scrollRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div className={`px-5 py-3.5 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === 'user' ? 'bg-forest text-white rounded-br-none' : 'bg-white/80 text-slate-800 rounded-bl-none border border-slate-100'}`}>
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4 justify-start">
            <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="px-5 py-3.5 rounded-2xl bg-white/80 text-slate-800 rounded-bl-none border border-slate-100 flex items-center">
              <Loader2 className="w-4 h-4 animate-spin text-lime" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white/50 border-t border-slate-200">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about NEQS limits, Zigzag tech, or EPA policies..."
            className="flex-grow bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all text-sm shadow-sm"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-lime hover:bg-forest disabled:opacity-50 disabled:hover:bg-lime transition-colors text-white px-6 rounded-xl flex items-center justify-center shadow-md shadow-lime/20"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
