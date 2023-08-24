import Title from "./Title";
import { servicesData } from "../data";

const Services = () => {
  const services = servicesData.map((service) => {
    const { id, title, icon, text } = service;
    return (
      <article key={id} className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    );
  });
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">{services}</div>
    </section>
  );
};

export default Services;
