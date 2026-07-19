import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaShareAlt,
  FaMobileAlt,
  FaBolt,
  FaImage,
  FaHashtag,
  FaLayerGroup,
  FaServer,
  FaWindowMaximize,
  FaCheck,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiMysql,
  SiGimp,
  SiFigma,
  SiJira,
  SiNpm,
  SiAxios,
} from "react-icons/si";

const techCategories = [
  {
    category: "Languages",
    items: [
      {
        name: "HTML/CSS",
        pairs: [
          { icon: <FaHtml5 />, label: "HTML" },
          { icon: <FaCss3Alt />, label: "CSS" },
        ],
        current: true,
      },
      { name: "JavaScript", icon: <SiJavascript />, current: true },
      { name: "C#", icon: <FaHashtag />, current: false },
      { name: "PHP", icon: <FaPhp />, current: true },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "ASP.Net", icon: <FaWindowMaximize />, current: false },
      { name: "ReactJS", icon: <FaReact />, current: true },
      { name: "jQuery", icon: <SiJquery />, current: true },
      { name: "Bootstrap", icon: <FaBootstrap />, current: true },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "SQL Server", icon: <FaDatabase />, current: false },
      { name: "MySQL", icon: <SiMysql />, current: true },
      { name: "Oracle SQL Developer", icon: <FaServer />, current: true },
    ],
  },
  {
    category: "Enterprise Platforms",
    items: [
      { name: "PeopleSoft", icon: <FaLayerGroup />, current: true },
      { name: "SharePoint", icon: <FaShareAlt />, current: false },
      { name: "MS PowerApps", icon: <FaMobileAlt />, current: false },
      { name: "MS Power Automate", icon: <FaBolt />, current: false },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Adobe Photoshop", icon: <FaImage />, current: false },
      { name: "GIMP", icon: <SiGimp />, current: true },
      { name: "Figma", icon: <SiFigma />, current: true },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Jira", icon: <SiJira />, current: true },
      {
        name: "Git/Github",
        pairs: [
          { icon: <FaGitAlt />, label: "Git" },
          { icon: <FaGithub />, label: "Github" },
        ],
        current: true,
      },
      {
        name: "Node/NPM",
        pairs: [
          { icon: <FaNodeJs />, label: "Node" },
          { icon: <SiNpm />, label: "NPM" },
        ],
        current: true,
      },
      { name: "Axios/REST APIs", icon: <SiAxios />, current: true },
    ],
  },
];

const TechStackGrid = () => {
  return (
    <div id="tech-h">
      {techCategories.map((category) => (
        <div className="tech-box" key={category.category}>
          <h5 className="title">{category.category}</h5>
          <hr />
          <ul>
            {category.items.map((item) => (
              <li key={item.name}>
                {item.pairs ? (
                  item.pairs.map((pair, index) => (
                    <span
                      key={pair.label}
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      {index > 0 && <span className="pair-separator">/</span>}
                      <span className="item-icon">{pair.icon}</span>
                      {pair.label}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="item-icon">
                      {item.icon}
                      {item.icon2}
                    </span>
                    {item.name}
                  </>
                )}
                {item.current && (
                  <FaCheck className="current-check" title="Currently using" />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="tech-legend">* Using in current projects</div>
    </div>
  );
};

export default TechStackGrid;
