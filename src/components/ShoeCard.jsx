const ShoeCard = ({
  imgURL,
  changBigShoeImage,
  bigShoeImg,
  changeName,
  changePrice,
}) => {
  // event
  const handleClick = () => {
    if (bigShoeImg !== imgURL.imgURL) {
      changBigShoeImage(imgURL.imgURL);
      changeName(imgURL.name);
      changePrice(imgURL.price);
    }
  };
  return (
    <div
      className={` ${bigShoeImg === imgURL.imgURL ? "gradient" : " bg-gray-300"}
         cursor-pointer max-sm:flex-1 rounded-xl`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center 
        items-center gap-5
         sm:w-40 sm:h-40 
        max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
