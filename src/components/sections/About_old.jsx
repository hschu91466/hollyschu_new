const About = () => {
  const reasons = [
    "I thrive on solving complex problems and turning ideas into reality through code.",
    "After 20 plus years, the creative power of programming still amazes me—transforming thoughts into working systems with just a keyboard.",
    "I appreciate the precision it demands—every character matters, and that discipline drives quality.",
    "I enjoy the diversity of approaches to a problem and the challenge of choosing the most effective one.",
    "Clean, well-documented code is not just functional—it's beautiful.",
    "There's nothing quite like the satisfaction of unraveling a tough bug or optimizing a critical system.",
    "Delivering a product that exceeds client expectations never gets old.",
  ];

  return (
    <section id="about">
      <div className="about-group">
        <p className="glass-panel about-item">
          I'm an application systems analyst/developer at Washington State
          University. Over the past 20 years at WSU, I've worked as a desktop
          support specialist, a web designer/developer, and an application
          developer. Outside of work, I enjoy camping with my family, sewing,
          exploring coding tutorials, and riding my motorcycle.
        </p>
        <div className="codelove glass-panel about-item">
          <h4>Why I Love Programming</h4>
          <ul>
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
