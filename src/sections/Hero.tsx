import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import cogImage from "../assets/cog.png";
import cylinderImage from "../assets/cylinder.png";
import noodle from "../assets/noodle.png";

export default function Hero() {
  return (
    <div className="flex flex-col p-8 md:flex-row md:pl-12 md:pt-12 md:pr-0 md:pb-12 xl:pr-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] items-center -z-10">
      <div className="flex flex-col gap-8 md:w-1/2 lg:px-8 xl:px-24">
        <div className="text-sm border rounded-lg border-gray-300 w-fit px-3">
          version 2.0 is here
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Pathway to productivity
        </h1>
        <p className="text-xl text-[#010D3E] tracking-tight w-full">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex items-center gap-3 items-center">
          <button className="btn btn-primary">Get for free</button>
          <div className="flex gap-2 items-center">
            <Link to="/" className="text-sm">
              Learn More
            </Link>
            <MoveRight size={18} />
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-0 md:flex-grow md:h-[700px] relative overflow-hidden">
        <img
          src={cogImage}
          width={500}
          className="md:absolute md:h-[550px] md:pl-40 xl:pl-24 md:w-auto md:max-w-none top-10"
        />
        <img
          src={cylinderImage}
          width={200}
          className="hidden md:flex top-0 left-0"
        />
        <img
          src={noodle}
          width={230}
          className="hidden xl:flex absolute -bottom-4 -right-4 rotate-30"
        />
      </div>
    </div>
  );
}
