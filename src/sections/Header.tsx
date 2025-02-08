import { MenuIcon, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logosaas.png";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center sticky top-0 backdrop-blur-sm z-10">
      <div className="w-full flex items-center justify-center gap-2 text-white bg-black text-sm py-2">
        <div className=" flex items-center gap-4">
          <p className="hidden md:flex text-gray-300">
            Streamline your workflow and boost your productivity
          </p>
          <p className="">Get started for free</p>
        </div>
        <MoveRight size={18} />
      </div>
      <div className="w-full flex justify-between items-center px-4 py-4">
        <div>
          <img src={logo} width={35} height={35} />
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">
            About
          </Link>
          <Link to="/" className="hover:underline">
            Features
          </Link>
          <Link to="/" className="hover:underline">
            Customers
          </Link>
          <Link to="/" className="hover:underline">
            Updates
          </Link>
          <Link to="/" className="hover:underline">
            Help
          </Link>
          <button
            className="bg-black text-white rounded-lg px-3 py-2"
            onClick={() => {}}
          >
            get for free
          </button>
        </div>
      </div>
    </div>
  );
}
