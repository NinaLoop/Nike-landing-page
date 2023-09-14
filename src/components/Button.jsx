const Button = ({ lable }) => {
  return (
    <div
      className="flex justify-center 
    items-center p-3 gradient 
    rounded-full w-36 mt-8 font-montserrat
     cursor-pointer"
    >
      <button className="font-bold text-white">{lable}</button>
    </div>
  );
};

export default Button;
