// pages/chat.tsx
import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, `Tu: ${input}`, `AI: (simulare) Răspuns la: ${input}`]);
    setInput('');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Chat AI</h1>
      <div style={{ marginBottom: 20 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '8px 0' }}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Scrie întrebarea..."
        style={{ padding: 8, width: '70%' }}
      />
      <button onClick={handleSend} style={{ marginLeft: 10, padding: 8 }}>
        Trimite
      </button>
    </div>
  );
}
