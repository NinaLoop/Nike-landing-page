const FeaturesCard = ({ imgURL, title, decription }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt={title} width={80} height={80} />
      <p
        className="font-roboto
       text-slate-500 
       leading-normal max-w-[260px]
        text-center mt-3"
      >
        {decription}
      </p>
    </div>
  );
};

export default FeaturesCard;
