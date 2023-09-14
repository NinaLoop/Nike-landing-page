import { HeroImg } from "../assets/Images";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      className="max-container padding flex justify-between items-start
     max-lg:flex-col gap-1"
    >
      {/* text part */}
      <div className="max-w-lg">
        <h1 className="title">
          <span className=" text-violet-600">Nike </span>Shoes for Every Step
        </h1>
        <p className="font-roboto text-slate-500 leading-normal mt-4">
          From the streets to the sports arena, our diverse range caters to
          every step of your journey
        </p>
        <Button lable="Shop Now" />
      </div>
      {/* img part */}
      <div className="relative flex-1 bg-cover">
        <img
          src={HeroImg}
          alt="hero img"
          width={610}
          height={500}
          className=" -mt-44 max-lg:-mt-14"
        />
      </div>
    </section>
  );
};
export default Hero;
