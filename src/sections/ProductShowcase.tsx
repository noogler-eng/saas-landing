import { useRef } from "react";
import productImage from "../assets/product-image.png";
import pyramid from "../assets/pyramid.png";
import tube from "../assets/tube.png";
import { motion, useScroll, useTransform } from "motion/react";

export default function ProductShowcase() {
  const hero_ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hero_ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div className="px-8 flex flex-col items-center w-full bg-gradient-to-b from-[#fff] to-[#D2DCFF] pt-24 pb-12 gap-8">
      <div className="text-sm border rounded-lg border-gray-300 w-fit px-3">
        Boost your productivity
      </div>
      <h2 className="tracking-tight font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text w-5/6 text-3xl md:w-8/12 xl:w-4/12 md:text-5xl text-center">
        A more effective way to track progress
      </h2>
      <div className="h-[400px] md:h-[1000px] md:h-full relative overflow-x-hidden overflow-y-hidden flex flex-col items-center">
        <p className="text-xl font-light w-5/6 md:w-6/12 xl:w-4/12 text-center mb-8">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <img src={productImage} className="w-[100%]" />
        <motion.img
          src={pyramid}
          className="hidden md:flex absolute md:w-[200px] xl:w-[250px] md:top-20 xl:-top-0 -right-10"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={tube}
          className="hidden md:flex absolute md:w-[200px]  xl:w-[250px] top-110 -left-30"
          style={{
            translateY: translateY,
          }}
        />
      </div>
    </div>
  );
}
