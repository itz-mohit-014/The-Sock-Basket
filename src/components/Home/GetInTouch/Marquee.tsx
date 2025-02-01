import { IoGlobeOutline } from "react-icons/io5";

interface MarqueeProps {
    text: string;
}

const Marquee = ({text}:MarqueeProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative py-4 border-y-2 my-10 border-black">
      {/* Marquee Container */}
      <div className="animate-marquee flex">
        {/* Original Content */}
        <div className="flex space-x-4 pr-8">
          {Array(5)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="inline-flex items-center text-xl">
                <IoGlobeOutline className="inline-block mr-4 text-red-800 text-md" />
                {text}
              </span>
            ))}
        </div>
        {/* Duplicated Content for Seamless Looping */}
        <div className="flex space-x-4 pr-8">
          {Array(5)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="inline-flex items-center text-xl">
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
