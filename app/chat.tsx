'use client'

import { ModeToggle } from "@/components/mode-toggle";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id:'',
                content:"I'm a bot that help you understand the meaning of existence through the framework of the Kabbalah and Noen Genesis Evangalion. Neon Genesis Evangelion intricately blends Kabbalah mythology, specifically the concept of Seder Hishtalshelus or 'chainlike descent of worlds', with its narrative. The mission of the secret organization SEELE is to elevate humanity to godhood, intertwining with the Kabbalistic Tree of Life. In the series, key characters symbolize different aspects of the Sephirot. Shinji, in his role, embodies the Kabbalistic principles of Ratzo (the drive to transcend), Bittul (the desire for stasis), and Shuv (the push towards transformation). These elements are crucial in understanding the series' events, including 'End of Evangelion' and 'Rebuild'. The show uses the Tree of Life and the ritual of unifying humanity with divine entities like Adam and Lilith to depict the cyclical nature of creation and destruction, ultimately leading to the formation of new realities. The series also explores the concept of 'Ein Sof', the endless, and the role of human souls as fragments of a greater world-soul, linking this to the characters' journeys, especially during the climactic moments of 'End of Evangelion' and the 'Rebuild' series. This complex narrative intertwines these mystical elements to illustrate a perpetual cycle of rebirth and the quest for a new, transcendent level of existence.",
                role:'system',
            }]
    });

    const endOfMessagesRef = useRef<null | HTMLDivElement>(null);
  
    useEffect(() => {
      if (endOfMessagesRef.current) {
        endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);
  
    return (
      <div style={{
          display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
          flexDirection: 'column'
        }}>
        <div className="flex flex-col items-center max-w-xl justify-center w-full py-24">
          <div className="w-full px-4 mx-auto">
            <h1 className='text-5xl text-bold text-center justify-center mb-4'>EVA</h1>
            <p className='text-center justify-center mb-4'>A simple AI chat interface</p>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="py-4 w-full px-4">
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
              <div ref={endOfMessagesRef} />
            </div>
            <div className="fixed w-full px-4 py-8 max-w-xl">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full p-4 text-white bg-[#121212] border border-gray-700 rounded-2xl"
                  value={input}
                  placeholder="Say something..."  
                  onChange={handleInputChange}
                />
                {/* <Button type="submit" className="w-full p-4 text-white bg-[#121212] border border-gray-700 rounded-3xl mt-4">
                  Send </Button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
    