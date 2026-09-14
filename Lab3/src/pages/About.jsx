import profileImage from "../assets/Arnav_Sharma_Photo.jpeg";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <p className="about-label">GET TO KNOW ME</p>

          <h1 className="about-title">
            About <span>Me</span>
          </h1>

          <p className="about-intro">
            I'm Arnav Sharma, a Computer Science student at NIT Warangal
            passionate about software development, problem solving, and
            building impactful products.
          </p>
        </div>

        <img
          src={profileImage}
          alt="Arnav Sharma"
          className="profile-image"
        />
      </section>

      <section className="about-section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div>
            <h3>B.Tech in Computer Science</h3>
            <p>NIT Warangal</p>
          </div>

          <span className="score">8.73 CGPA</span>
        </div>

        <div className="education-details">
          <div>
            <span>Minor</span>
            <strong>Management — 8.0 CGPA</strong>
          </div>

          <div>
            <span>Class XII</span>
            <strong>89%</strong>
          </div>

          <div>
            <span>Class X</span>
            <strong>95%</strong>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Achievements</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <span className="achievement-number">01</span>
            <div>
              <h3>Bronze Medalist</h3>
              <p>All India Inter-NIT Yoga Championship</p>
            </div>
          </div>

          <div className="achievement-card">
            <span className="achievement-number">02</span>
            <div>
              <h3>Competitive Programming</h3>
              <p>1450 LeetCode · 1232 Codeforces</p>
            </div>
          </div>

          <div className="achievement-card">
            <span className="achievement-number">03</span>
            <div>
              <h3>500+ Problems</h3>
              <p>Data Structures & Algorithms</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;