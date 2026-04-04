const items = [
  { icon: '⚡', title: 'Fast Performance', desc: 'Get answers in seconds. No waiting, no lag.' },
  { icon: '🤖', title: 'AI Assistance', desc: 'Code help, notes, task planning — all in one.' },
  { icon: '📱', title: 'Works on Mobile', desc: 'Use on phone, tablet or laptop — anywhere.' },
  { icon: '🔒', title: '100% Secure', desc: 'Your data is safe. We never sell your info.' },
]

function Features() {
  return (
    <div className="features" id="features">
      <h2>Why Use <span className="purple">AIFlow?</span></h2>
      <p>Everything you need in one place</p>
      <div className="cards">
        {items.map((item, i) => (
          <div className="card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features