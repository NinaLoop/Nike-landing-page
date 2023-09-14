const SocialMediaCard = ({ src, alt }) => {
  return (
    <div
      className=" hover:gradient 
     rounded-lg p-1 cursor-pointer"
    >
      <a>
        <img src={src} alt={alt} width={24} height={24} />
      </a>
    </div>
  );
};

export default SocialMediaCard;
