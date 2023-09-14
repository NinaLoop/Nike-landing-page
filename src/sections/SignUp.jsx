import Button from "../components/Button";

const SignUp = () => {
  return (
    <section
      className="flex justify-around 
    items-start max-md:flex-col max-md:justify-start gap-5"
    >
      <div>
        <h1 className="title">Sign Up</h1>
        <p className="info mt-6">
          Sign up and{" "}
          <span className="font-bold text-black">
            get 15% off yor first order
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <label id="Email" className="font-bold font-montserrat">
          Email
        </label>
        <input
          placeholder="Enter your Email"
          htmlFor="Email"
          className=" w-80 
            h-11 rounded-xl p-5
           mt-4 border-2 border-slate-500"
        />
        <Button lable="Sign up" />
      </div>
    </section>
  );
};

export default SignUp;
