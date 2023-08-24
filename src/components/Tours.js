import Title from "./Title";
import { toursData } from "../data";
import Tour from "./Tour";

const Tours = () => {
  const tours = toursData.map((tour) => <Tour {...tour} />);
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">{tours}</div>
    </section>
  );
};

export default Tours;
