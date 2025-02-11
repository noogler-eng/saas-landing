import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function Price({
  item,
}: {
  item: {
    bg: string;
    tierName: String;
    special: String;
    price: Number;
    button: String;
    features: string[];
  };
}) {
  return (
    <div
      className={`p-8 ${
        item.bg == "white" ? "bg-white text-black" : "bg-black text-white"
      } rounded-xl flex flex-col gap-5 drop-shadow-2xl h-fit`}
    >
      <div className="flex justify-between items-center">
        <div className="text-gray-400 text-sm font-semibold">
          {item.tierName}
        </div>
        {item.special ? (
          <motion.div
            className="border border-gray-500 rounded-xl py-1 px-2 text-xs bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
            animate={{
              backgroundPositionX: "-100%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration: 6
              },
            }}
          >
            {item.special}
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <div className="font-extrabold">
        ${Number(item.price)}
        <span className="text-gray-400 text-sm">/month</span>
      </div>
      <button
        className={`${
          item.bg == "black" ? "bg-white text-black" : "bg-black text-white"
        }  rounded-lg text-sm px-3 py-1`}
      >
        {item.button}
      </button>
      <ul className="flex flex-col gap-3">
        {item.features.map((i, ind) => {
          return (
            <li key={ind} className="text-sm flex items-center gap-2">
              <Check />
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
