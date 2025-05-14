// pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Chat AI Starter</h1>
      <p>Mergi către <Link href="/chat">/chat</Link> pentru a discuta cu AI-ul.</p>
    </div>
  )
}
