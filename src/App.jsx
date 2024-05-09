import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>

        <div className="post">
          <img src="https://media.wired.com/photos/663a73d25701544accfd071e/master/w_2240,c_limit/Met-Gala-AI_AI-Generated.jpg" alt="" />
          <h2>Met Gala Deepfakes Are Flooding Social Media</h2>
          <p>The Met Gala is undoubtedly one of the most anticipated events of the year, but this time the music and entertainment celebrities who graced its red carpet had some competition for the public's attention</p>
        </div>
        <div className="post">
          <img src="https://media.wired.com/photos/663a73d25701544accfd071e/master/w_2240,c_limit/Met-Gala-AI_AI-Generated.jpg" alt="" />
          <h2>Met Gala Deepfakes Are Flooding Social Media</h2>
          <p>The Met Gala is undoubtedly one of the most anticipated events of the year, but this time the music and entertainment celebrities who graced its red carpet had some competition for the public's attention</p>
        </div>
        <div className="post">
          <img src="https://media.wired.com/photos/663a73d25701544accfd071e/master/w_2240,c_limit/Met-Gala-AI_AI-Generated.jpg" alt="" />
          <h2>Met Gala Deepfakes Are Flooding Social Media</h2>
          <p>The Met Gala is undoubtedly one of the most anticipated events of the year, but this time the music and entertainment celebrities who graced its red carpet had some competition for the public's attention</p>
        </div>
    </main>
  )
}

export default App
