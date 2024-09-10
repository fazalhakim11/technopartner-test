import { useDispatch } from "react-redux";
import Logo from "../../assets/logo_technopartner.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../stores/slices/loginSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }, navigate));
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
            value={username}
            className="focus:outline-none px-3 bg-[#ffffff] drop-shadow h-[40px] w-[75%] rounded-lg mb-5"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="text-[#b5b5b5] mb-3 w-max">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            className="focus:outline-none px-3 bg-[#ffffff] drop-shadow h-[40px] w-[75%] rounded-lg mb-10"
            onChange={(e) => setPassword(e.target.value)}
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
