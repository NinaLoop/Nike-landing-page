import { star } from "../assets/Icons";

const ReviewsCard = ({ feedback, name, rating }) => {
  return (
    <div
      className="flex flex-col 
    max-w-[270px] bg-white
     h-60 p-8 justify-end shadow-lg"
    >
      <p className="info">{feedback}</p>
      <div className="flex justify-between mt-3">
        <h3 className="text-xl font-montserrat font-bold">{name}</h3>
        <div className="flex gap-3">
          <img src={star} width={24} height={24} alt="rating" />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
