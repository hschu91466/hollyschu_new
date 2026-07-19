import "../../styles/experience.css";
const Experience = () => {
  const selectedProjects = [
    "Site Modernization – Migrating legacy PHP sites to ReactJS with custom admin consoles, starting with one Artist Portfolio Site and extending the same template to the Band Website.",
    "Artist Portfolio Sites – Designed and developed responsive websites for visual artists using Bootstrap, Magnific Popup, and Font Awesome; one site rebuilt in ReactJS with an admin console for managing galleries, moderating comments, managing users, and reviewing contact submissions.",
    "Band Website – Built a dynamic site using PHP, MySQL, and Google Fonts to manage events, media, and contact forms, with a custom admin console for managing music videos, tour dates, publishing news, and creating newsletters.",
    "Gaming Site (In Progress) – Developing a browser-based game using PHP and JavaScript classes with a focus on modular design and interactivity.",
  ];

  const jobs = [
    {
      title: "IT App Development - Journey",
      dates: "Washington State University - 10/2024 – Present",
      bullets: [
        "Support and troubleshoot issues in PeopleSoft, including adding new features to enhance functionality and user experience.",
        "Troubleshoot and resolve various JIRA-related issues across multiple projects and teams.",
        {
          text: "Develop and support JIRA applications, including:",
          subBullets: [
            "Inventory Management Project – Designed and implemented a JIRA-based system to efficiently assign equipment and generate logs, improving asset tracking and accountability.",
            "Change Control Board Project – Created a structured JIRA workflow for managing change requests.",
          ],
        },
        "Collaborate with administrative and business staff to gather requirements and enhance applications to meet evolving needs.",
        "Provide training and documentation for supported systems and applications.",
        "Maintain existing SharePoint sites for purchase requests, inventory, and change control board processes, ensuring continued usability and performance.",
      ],
    },
    {
      title: "Application Systems Analyst/Developer",
      dates: "Washington State University - 6/2012 – 10/2024",
      bullets: [
        "Provided support for SharePoint Online site collections for several departments.",
        "Successfully migrated these sites from SharePoint 2010 on-premise to SharePoint Online in 2019.",
        "Designed, programmed, and supported several full-featured, fully automated InfoPath forms sites that utilize Active Directory and SharePoint to gather required signatures.",
        "Designed, programmed, and supported Power Apps for change control board and teleworking agreement.",
        "Assisted with programming the ITS WordPress website.",
        "Added features to SharePoint and WordPress sites using HTML, CSS, JSON, JavaScript and jQuery.",
        "Met regularly with administrative and business staff to define business requirements and enhance applications.",
        "Developed and provided group training for these applications.",
      ],
    },
    {
      title: "Information Technology Specialist 2",
      dates: "Washington State University - 10/2010 to 6/2012",
      bullets: [
        "Designed, programmed, maintained, and supported several large SharePoint InfoPath applications and smaller solutions.",
        "Met regularly with administrative and business staff to define requirements and enhance applications.",
        "Developed and provided group training for these applications.",
        "Provided support for SharePoint site collections for several departments.",
      ],
    },
    {
      title: "IT Tech/Desktop Support",
      dates: "Washington State University - 12/2003 to 10/2010",
      bullets: [
        "Designed, developed, programmed, maintained, and supported several SharePoint/InfoPath business solutions.",
        "Provided hardware and software installation, troubleshooting, maintenance, and technical support for IT staff and SLA clients.",
        "Instructed employees, answered questions, distributed workload, and checked work.",
        "Developed procedures for system management and maintained software and hardware inventories.",
      ],
    },
  ];

  const education = [
    {
      title: "A.A.S Degree - Legal Secretary With Computer Emphasis",
      dates: "Phillips Junior College - 1990–1991",
    },
  ];

  return (
    <section id="experience">
      <div className="paper">
        <div className="career-summary-header">
          <h4>Career Summary</h4>
          <a href="/resume.pdf" className="resume-btn" download>
            Download Resume
          </a>
        </div>
        <p>
          Experienced IT professional with over two decades of progressive roles
          at Washington State University, beginning in 2003. While my background
          has focused on application support and development, I have
          consistently worked across both front-end and back-end technologies,
          including HTML, CSS, JavaScript, PHP, MySQL, and JSON. My portfolio
          includes custom web applications, SharePoint and WordPress
          enhancements, and JIRA-based systems. I am now seeking opportunities
          in full-stack development where I can apply my broad technical
          foundation, problem-solving skills, and collaborative approach to
          building modern, user-centered solutions.
        </p>

        <div>
          <h4>Professional Experience</h4>
          <hr />
          <h5>Selected Projects</h5>
          <hr />
          <ul>
            {selectedProjects.map((project, index) => (
              <li key={index} className="blue-squares">
                {project}
              </li>
            ))}
          </ul>

          {jobs.map((job) => (
            <div key={job.title}>
              <hr />
              <h5>{job.title}</h5>
              <hr />
              <h6>{job.dates}</h6>
              <ul>
                {job.bullets.map((bullet, index) =>
                  typeof bullet === "string" ? (
                    <li key={index} className="blue-squares">
                      {bullet}
                    </li>
                  ) : (
                    <li key={index} className="blue-squares">
                      {bullet.text}
                      <ul className="blue-squares-outline">
                        {bullet.subBullets.map((sub, subIndex) => (
                          <li key={subIndex}>{sub}</li>
                        ))}
                      </ul>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4>Education & Training</h4>
          <ul>
            {education.map((item) => (
              <li key={item.title} className="blue-squares">
                <div className="title">
                  <hr />
                  <h5>{item.title}</h5>
                  <hr />
                </div>
                <h6>{item.dates}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
