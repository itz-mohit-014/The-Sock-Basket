import Video from "./Video";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 font-sans min-h-[calc(100vh-75px)] pt-12">
      <h1 className="flex items-center justify-center flex-wrap gap-4 xl:text-[156px] md:text-[120px] sm:text-[90px] text-[60px] leading-[80%] text-black font-bold text-center">
        <span className="italic">
          DRES<i className="transform skew-x-[16deg] inline-block mr-0.5">SE</i>
          D
        </span>
        <span>SOCKS</span>
      </h1>
      <Video />
    </section>
  );
};

export default Hero;
