import FeaturesCard from "../components/FeaturesCard";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <div className="flex justify-between items-center gap-20 mt-20 max-sm:flex-col">
        {features.map((feature) => (
          <FeaturesCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
