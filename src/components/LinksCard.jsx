const LinksCard = ({ title, links }) => {
  return (
    <div className="text-white flex flex-col">
      <h3 className="text-xl font-montserrat font-bold mb-2">{title}</h3>
      {links.map((link) => (
        <div
          key={link}
          className="hover:underline 
        underline-offset-2 cursor-pointer"
        >
          <a href="#">{link}</a>
        </div>
      ))}
    </div>
  );
};

export default LinksCard;
