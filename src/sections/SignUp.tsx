import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import spring from "../assets/spring.png";
import star from "../assets/star.png";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-5 items-center w-full overflow-x-hidden bg-gradient-to-b from-[#fff] to-[#D2DCFF] p-8 relative">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
        Sign up for free today
      </h1>
      <p className="text-sm md:text-xl w-8/12 md:w-5/12 text-center">
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>
      <div className="flex items-center gap-4">
        <button className="text-sm bg-black text-white rounded-lg px-3 py-2">
          Get for free
        </button>
        <Link
          to="/"
          className="text-sm hover:underline flex gap-1 items-center"
        >
          Learn More <MoveRight />
        </Link>
      </div>
      <img src={star} width={200} className="absolute top-10 -left-30" />
      <img
        src={spring}
        width={200}
        className="absolute top-14 -right-30 md:-right-10"
      />
    </div>
  );
}
