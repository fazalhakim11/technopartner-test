import Logo from "../../assets/logo_technopartner.png";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <main>
      <div className="flex flex-col mt-[70px] md:mt-[30px] mb-10 items-center">
        <img
          className="w-[275px] xs:w-[350px] mb-[70px] md:mb-[30px]"
          src={Logo}
          alt="Technopartner Indonesia"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-[90%]"
        >
          <label htmlFor="email" className="text-[#b5b5b5] mb-3 w-max">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="focus:outline-none px-3 bg-[#ffffff] drop-shadow h-[40px] w-[75%] rounded-lg mb-5"
          />
          <label htmlFor="password" className="text-[#b5b5b5] mb-3 w-max">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="focus:outline-none px-3 bg-[#ffffff] drop-shadow h-[40px] w-[75%] rounded-lg mb-10"
          />
          <button
            type="submit"
            className="self-center bg-[#ffffff] w-[50%] rounded-lg drop-shadow p-2 py-[0.65rem] font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
