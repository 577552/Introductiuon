import React from 'react'

function Job() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Hello, I'm Lekhana</h2>
        <p>A passionate Web Developer ready to build beautiful UIs.</p>
        <button>View My Work</button>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>I love building modern and responsive websites using ReactJS.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>💻 Portfolio Website</li>
          <li>📱 To-Do App</li>
          <li>📊 Dashboard UI</li>
        </ul>
      </section>

      <footer className="footer" id="contact">
        <p>Contact: lekhana@example.com</p>
        <p>&copy; 2025 Lekhana</p>
      </footer>
    </div>
  );

}

export default Job