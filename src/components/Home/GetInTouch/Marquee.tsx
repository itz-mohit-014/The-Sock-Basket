import { IoGlobeOutline } from "react-icons/io5";

interface MarqueeProps {
    text: string;
}

const Marquee = ({text}:MarqueeProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative py-4 border-y-2 my-10 border-black">
      <div className=" flex">
        <div className="flex space-x-4 pr-8 text-transparent animate-marquee">
          {Array(5)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="inline-flex items-center font-bold text-3xl">
                <IoGlobeOutline className="inline-block mr-4 text-red-800 text-md" />
                {text}
              </span>
            ))}
        </div>
        <div className="flex space-x-4 pr-8  text-transparent animate-marquee">
          {Array(5)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="inline-flex items-center font-bold text-3xl">
                <IoGlobeOutline className="inline-block mr-4 text-red-800 text-md" />
                {text}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
