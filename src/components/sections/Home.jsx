import TechStackGrid from "../TechStackGrid";
import "../../styles/home.css";

// Landing section: profile photo, intro bio, and the Tech Stack grid below.
const Home = () => {
  return (
    <section id="home">
      <div className="home-top">
        <img
          src="./images/hschu_14.png"
          alt="Holly Schu"
          className="profile-photo"
        />
        <p className="bio-text">
          Full-Stack Web Developer with over 20 years of experience building
          responsive, user-friendly web applications. Skilled in HTML5, CSS3,
          JavaScript, React, Bootstrap, PHP, and modern frameworks. Passionate
          about creating intuitive user experiences and continuously learning
          new technologies.
        </p>
      </div>

      <h4 className="tech-heading">Tech Stack</h4>
      <TechStackGrid />
    </section>
  );
};

export default Home;
