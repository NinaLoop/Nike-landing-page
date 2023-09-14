import { statistics } from "../constants";
const Statistics = () => {
  return (
    <section
      className="flex justify-center 
    items-center gap-20 mb-10"
    >
      {statistics.map((stat) => (
        <div key={stat.label}>
          <h1
            className="text-4xl 
           font-montserrat font-bold max-sm:text-3xl"
          >
            {stat.value}
          </h1>
          <p
            className="font-roboto
           text-gray-500 underline underline-offset-8
            decoration-violet-500 decoration-4 mt-3"
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;
