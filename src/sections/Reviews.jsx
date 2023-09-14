import ReviewsCard from "../components/ReviewsCard";
import { reviews } from "../constants";

const Reviews = () => {
  return (
    <section className=" bg-gray-100 py-9 mt-20">
      <h1 className="title px-2 text-center">
        <span className=" text-violet-600">Customers </span> Review
      </h1>
      <div className="flex justify-center items-center gap-10 max-md:flex-col mt-8">
        {reviews.map((review) => (
          <ReviewsCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
