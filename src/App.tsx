import "./App.css";

function App() {
  const skills = ["HTML", "CSS", "Git", "GitHub", "C", "Python"];

  return (
    <div>
      {/* ===== Header / Intro ===== */}
      <header className="card intro">
        <img src="/profile.jpg" alt="Hein's profile photo" className="profile-photo" />
        <h1>Hi, I'm Hein Htet Khaing 👋</h1>
        <p className="subtitle">Computer Engineering Student · Pai Chai University (Korea)</p>
        <p>
          I'm learning web development, programming, and Git/GitHub.
          This is my first personal profile page!
        </p>
      </header>

      <main>
        {/* ===== About ===== */}
        <section className="card">
          <h2>About Me</h2>
          <p>
            I'm an undergraduate student studying Computer Engineering in Daejeon, South Korea.
            I enjoy building small projects and learning new technologies step by step.
          </p>
        </section>

        {/* ===== Education ===== */}
        <section className="card">
          <h2>Education</h2>
          <ul>
            <li><strong>Pai Chai University</strong> — B.S. in Computer Engineering</li>
          </ul>
        </section>

        {/* ===== Skills ===== */}
        <section className="card">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* ===== Interests ===== */}
        <section className="card">
          <h2>Interests</h2>
          <ul>
            <li>Web development</li>
            <li>AI and new technology</li>
            <li>Traveling</li>
          </ul>
        </section>

        {/* ===== Contact ===== */}
        <section className="card">
          <h2>Contact</h2>
          <div className="links">
            <a href="https://github.com/haddy256" target="_blank">GitHub</a>
            <a href="mailto:heinhtetkhaing60@gmail.com">Email</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Haddy · Made with React &amp; CSS</p>
      </footer>
    </div>
  );
}

export default App;