import { useState, useEffect } from 'react'

const phrases = [
  'help you code faster...',
  'learn smarter with AI...',
  'plan your tasks easily...',
  'generate notes instantly...'
]

function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, deleting ? 50 : 80)

    return () => clearTimeout(timer)
  }, [text, deleting, phraseIndex])

  return (
    <div className="hero">
      <h1>
        Boost Your <span className="purple">Productivity</span><br />
        with AI 🚀
      </h1>
      <p>Smart tools for students and developers</p>
      <p className="typing blue">{text}</p>
      <div className="hero-btns">
        <button className="btn-main">Get Started Free</button>
        <button className="btn-outline">▶ Watch Demo</button>
      </div>
    </div>
  )
}

export default Hero