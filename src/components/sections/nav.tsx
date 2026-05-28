// Assets
import logo from "../../assets/logo.svg";

// Components
import Width from "../width";

const Nav = () => {
  return (
    <Width className="h-[100px] flex flex-row items-center justify-between px-4">
      <img src={logo} alt="logo" className="w-[150px]" />
      <a
        href="#"
        className="bg-[#009263] text-white font-bold px-5 py-2.5 rounded-md hover:bg-[#007a52] transition-colors text-sm"
      >
        Join Now
      </a>
    </Width>
  );
};

export default Nav;
