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
    image: "/images/bessermin-artworks.png",
    link: "https://besserminartworks.com/",
    buttonText: "View Web Site",
  },
  {
    title: "Squalm",
    tech: "PHP, MySQL, Google Fonts",
    image: "/images/squalm.png",
    link: "https://squalmband.com/",
    buttonText: "View Web Site",
  },
  {
    title: "Interactive Org Chart",
    tech: "JavaScript, JSON, jQuery",
    image: "/images/OrgChart.png",
    link: "https://hollyschu.com/public/pages/OrgChart/orgChart.html",
    buttonText: "View Org Chart",
  },
  {
    title: "SharePoint Business Forms",
    tech: "SharePoint, InfoPath",
    image: "/images/sp-forms.png",
    link: "https://hollyschu.com/public/pages/sp_forms.php",
    buttonText: "View Forms Demo",
  },
  {
    title: "Davidzart",
    tech: "Bootstrap, Magnific Popup, Font Awesome",
    image: "/images/davidzart.png",
    link: "https://davidzart.com/",
    buttonText: "View Web Site",
  },
  {
    title: "This Site",
    tech: "React, PHP, MySQL",
    image: "/images/thisSiteToo.png",
    link: null,
    buttonText: "You Are Here",
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
