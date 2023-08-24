import Title from "./Title";
import { toursData } from "../data";

const Tours = () => {
  const tours = toursData.map((tour) => {
    const { id, img, date, title, text, country, days, price } = tour;
    return (
      <article key={id} className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>
              {country}
            </p>
            <p>{days} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
    );
  });
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">{tours}</div>
    </section>
  );
};

export default Tours;
