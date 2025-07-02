import React, { useState, useEffect, useRef } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef();
  const messagesEndRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: 'Hey! Welcome to Cluster. How can I help you?', 
        sender: 'bot' 
      }]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <div className={`fixed bottom-24 right-6 z-50 w-90 transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div ref={chatRef} className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-semibold">Cluster ChatBot</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-900 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-800">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 mt-8 animate-fade-in">
                <div className="text-2xl mb-2">👋</div>
                <p>Hello! How can I help you today?</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`max-w-xs px-4 py-2 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white ml-4' 
                    : 'bg-slate-800 text-slate-100 mr-4 border border-slate-700'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

           
            {isTyping && (
              <div className="flex justify-start animate-slide-up">
                <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSend}
                disabled={input.trim() === ''}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="font-medium">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-25 right-9 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-3xl active:scale-95 ${
          isOpen ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="relative">
          <span className="text-2xl animate-bounce">💬</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </div>
      </button>

    
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thumb-blue-600::-webkit-scrollbar-thumb {
          background-color: #2563eb;
          border-radius: 4px;
        }
        
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: #1e293b;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}

export default ChatBot;