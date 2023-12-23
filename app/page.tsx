'use client';

import React, { useEffect, useRef } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { useChat } from 'ai/react';
import Chat from './chat';

export const runtime = 'edge';


export default function Home() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        }}>
      <Chat />
    </div>
  );
}
