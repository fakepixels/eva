'use client';

import React, { useEffect, useRef } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { useChat } from 'ai/react';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  // Scroll into view every time messages update
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <div className="flex flex-col items-center max-w-md justify-center w-full py-24">
        <div className="w-full px-4 mx-auto">
          <h1 className='text-5xl text-bold text-center justify-center mb-4'>EVA</h1>
          <p className='text-center justify-center mb-4'>A simple AI chat interface</p>
        </div>
        <div>
          <ModeToggle />
        </div>
        <div className="w-full px-4">
          <div className="overflow-auto h-96 flex flex-col gap-12">
            {messages.map((m, index) => (
              <div 
                key={m.id} 
                className={`whitespace-pre-wrap px-6 py-3 rounded-3xl ${
                  m.role === 'user' ? 'bg-[#FCA300] ml-auto text-[#121212]' : 'bg-gray-300 text-[#121212] mr-auto'
                }`} 
                style={{ maxWidth: '70%', minWidth: '10rem' }}
              >
                {m.content}
              </div>
            ))}
            {/* Empty div for scrolling into view */}
            <div ref={endOfMessagesRef} />
          </div>
          <form onSubmit={handleSubmit} className="max-w-md fixed bottom-0 w-full px-4 pb-8">
            <input
              className="w-full p-4 text-white bg-[#121212] border border-gray-700 rounded-3xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
