import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/portfolio.css";
import PortfolioCard from "../portfolio/PortfolioCard";

const projects = [
  {
    title: "Bessermin Artworks",
    tech: "Bootstrap, Magnific Popup, Font Awesome",
    image: "/images/portfolio/bessermin-artworks.png",
    link: "https://besserminartworks.com/",
    buttonText: "View Web Site",
  },
  {
    title: "Squalm",
    tech: "PHP, MySQL, Google Fonts",
    image: "/images/portfolio/squalm.png",
    link: "https://squalmband.com/",
    buttonText: "View Web Site",
  },
  {
    title: "Interactive Org Chart",
    tech: "JavaScript, JSON, jQuery",
    image: "/images/portfolio/OrgChart.png",
    link: "./legacy-projects/OrgChart/orgChart.html",
    buttonText: "View Org Chart",
  },
  {
    title: "SharePoint Business Forms",
    tech: "SharePoint, InfoPath",
    image: "/images/portfolio/sp-forms.png",
    link: "/sp-forms",
    internal: true,
    buttonText: "View Forms Demo",
  },
  {
    title: "Davidzart",
    tech: "React, PHP, MySQL",
    image: "/images/portfolio/davidzart.png",
    link: "https://davidzart.com/",
    buttonText: "View Web Site",
  },
  {
    title: "This Site",
    tech: "React, PHP, MySQL",
    image: "/images/portfolio/thisSiteToo.png",
    link: null,
    buttonText: "You Are Here",
  },
  {
    title: "Sliding Puzzle",
    tech: "JavaScript, CSS Grid",
    image: "/images/portfolio/train2.png",
    link: "/puzzle",
    internal: true,
    buttonText: "Play Puzzle",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h3 className="sr-only">Portfolio Projects</h3>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        a11y={{
          prevSlideMessage: "Previous project",
          nextSlideMessage: "Next project",
          paginationBulletMessage: "Go to project {{index}}",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          601: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <PortfolioCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
