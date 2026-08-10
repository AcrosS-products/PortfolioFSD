import profileImage from "../assets/Arnav_Sharma_Photo.jpeg";

function About() {
  return (
    <main>
      <section>
        <h1>About Me</h1>

        <img
          src={profileImage}
          alt="Arnav Sharma"
          className="profile-image"
        />
      </section>

      <section>
        <h2>Education</h2>

        <p>
          B.Tech in Computer Science, NIT Warangal (CGPA: 8.73)
          <br />
          Minor in Management (CGPA: 8.0)
          <br />
          CBSE 12th: 89% | CBSE 10th: 95%
        </p>
      </section>

      <section>
        <h2>Achievements</h2>

        <ul>
          <li>Bronze at All India Inter-NIT Yoga Championship</li>
          <li>1450 Rating on LeetCode, 1232 on Codeforces</li>
          <li>Solved 500+ DSA problems</li>
        </ul>
      </section>
    </main>
  );
}

export default About;