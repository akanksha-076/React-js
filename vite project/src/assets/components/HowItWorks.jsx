const steps = [
  { num: '1', title: 'Sign Up Free', desc: 'Create account in 30 seconds. No credit card needed.' },
  { num: '2', title: 'Pick a Tool', desc: 'Notes AI, Code Helper or Task Planner.' },
  { num: '3', title: 'Get Results', desc: 'AI gives you exactly what you need instantly.' },
]

function HowItWorks() {
  return (
    <div className="steps" id="steps">
      <h2>How It <span className="purple">Works</span></h2>
      <p>Just 3 simple steps</p>
      <div className="steps-row">
        {steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="step-num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks