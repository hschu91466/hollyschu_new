import "../../styles/about.css";

const highlights = [
  "Turning ideas into working systems",
  "Unraveling a tough bug or optimizing a system",
  "Finding the most effective approach to a problem",
  "Taking pride in clean, well-documented code",
  "Delivering something that exceeds a stakeholder's expectations",
];

function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div className="about-grid">
          <div className="about-column">
            <h4 className="about-heading">About Me</h4>
            <div className="about-bio about-panel">
              <p>
                <span className="greeting">Hi, I'm Holly!</span> I am an
                Application Systems Developer at Washington State University
                with more than 20 years of experience spanning desktop support,
                web development, and application development.
              </p>
              <p className="about-bio-secondary">
                Outside of work, you'll usually find me camping with my family,
                working through coding tutorials, or sewing my next project.
              </p>
            </div>
          </div>

          <div className="about-column">
            <h4 className="about-heading">What I love about programming</h4>
            <div className="about-panel">
              <ul className="about-highlights-list">
                {highlights.map((item) => (
                  <li className="blue-squares" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <figure className="about-workspace">
          <img
            src="/images/desk-setup.jpg"
            alt="Holly's desk setup with a triple-monitor coding workspace"
            className="about-workspace-photo"
          />
          <figcaption className="about-workspace-caption">
            Where the code comes together
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default About;
