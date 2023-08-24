import Title from "./Title";
import { servicesData } from "../data";
import Service from "./Service";

const Services = () => {
  const services = servicesData.map((service) => <Service {...service} />);
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">{services}</div>
    </section>
  );
};

export default Services;
