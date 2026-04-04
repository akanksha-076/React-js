const reviews = [
  { name: 'Riya Sharma', role: 'CS Student', text: 'AIFlow saved me during exams. Notes generator is amazing!' },
  { name: 'Aarav Mehta', role: 'Freelance Dev', text: 'Code helper caught bugs I was stuck on for hours.' },
  { name: 'Priya Nair', role: 'Product Designer', text: 'My productivity went up 40% in just one week!' },
  { name: 'Kabir Joshi', role: 'Eng Student', text: 'Finally an AI tool that understands my code context.' },
  { name: 'Ananya Reddy', role: 'MBA Student', text: 'Use it for research and presentation outlines daily.' },
  { name: 'Dev Patel', role: 'Backend Dev', text: 'The speed is unreal. No other AI tool comes close.' },
]

function Testimonials() {
  const doubled = [...reviews, ...reviews]

  return (
    <div className="testimonials" id="reviews">
      <h2>What People <span className="purple">Say</span></h2>
      <p>Real reviews from real users</p>
      <div className="track-wrapper">
        <div className="track">
          {doubled.map((r, i) => (
            <div className="review" key={i}>
              <div className="stars">★★★★★</div>
              <p>{r.text}</p>
              <div className="person">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <div className="person-name">{r.name}</div>
                  <div className="person-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials