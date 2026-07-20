import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const activeSection = useActiveSection(sections.map((s) => s.id));

  const doScroll = (id) => {
    const target = document.getElementById(id);
    const headerHeight = navRef.current?.offsetHeight || 0;

    if (target) {
      const targetOffset =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    // Section elements (Home, Experience, etc.) only exist in the DOM
    // while MainPage is rendered — i.e. on "/". If we're on another
    // route (like /sp-forms), navigate home first and wait a tick for
    // MainPage to mount before trying to scroll to the section.
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => doScroll(id), 100);
    } else {
      doScroll(id);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <h1 className="sr-only">
        Holly Schu – Full-Stack Web Developer Portfolio
      </h1>
      <div className="brand-bar">
        <div className="nav-brand">
          <span className="nav-logo">
            <img src="./images/hs_logo4.png" alt="" />
          </span>
          <div>
            <span className="nav-name">HollySchu</span>
            <p className="nav-tagline">Full-Stack Web Developer</p>
          </div>
        </div>
        {/* <a href="/login" className="login-link">
          Login
        </a> */}
      </div>

      <div className="links-bar">
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-list"
        >
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`} id="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={
                  "site-nav-link" +
                  (activeSection === section.id ? " is-active" : "")
                }
                aria-current={
                  activeSection === section.id ? "location" : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
