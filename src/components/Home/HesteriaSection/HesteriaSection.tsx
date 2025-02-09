import { Link } from "react-router-dom";
import HeadingWithShades from "../../UI/HeadingWithShades";

const HesteriaSection = () => {

  return (
    <section className="max-w-7xl mx-auto p-4 font-sans min-h-screen pt-12 max-lg:gap-y-52 grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:order-0 order-1 relative h-full min-h-[80vh]">
        <div className="absolute top-0 left-0 h-[90%] w-[75%] border-2 border-black"></div>
        <div className="absolute top-5 left-5 h-[calc(100%-20px)] w-[calc(100%-20px)] shadow">
          <img
            src="/images/hesteria_section_1.png"
            alt="image hesteria collection"
            className="h-full w-full object-cover rounded-sm border-2 border-black"
          />
          <Link
            className={"active:scale-95 max-lg:my-8 absolute z-10 max-lg:-top-48 lg:bottom-7 lg:-translate-y-1/1 lg:translate-x-2/5 right-1/2 translate-x-1/2 lg:right-0 bg-[#daf099] rounded-[50%] text-black px-20 py-6 font-semibold text-3xl border-2 border-black"}
            
            to={"/collection/histeria"}
          >Explore</Link>
        </div>
      </div>

      <div className="lg:order-1 order-0 p-4">
        <HeadingWithShades className={"flex flex-wrap justify-center gap-2 gap-y-0 "} text={
          <>
            <span className="-skew-x-[16deg]">Histeria</span>
            <span className="skew-x-[16deg]">Collection</span>
        </>}/>
        
        <p className="max-w-[100%] sm:max-w-[65%] my-12 mx-auto text-center text-slate-800 font-sans  text-xl">
          Break the pattern and mix, or match, it up. From tights and liner
          socks, to keen-high and ankel socks, these bold prints will bring out
          your personality in many unexpected and unique ways.
        </p>
        <div className="w-full">
          <div className="w-fit max-lg:mx-auto lg:ml-auto relative sm:-translate-x-6 lg:translate-y-12">
            <div className="border-2 border-black min-w-[70vw] sm:min-w-[min(40vw,_320px)] ml-auto aspect-square h-full"></div>
            <img
              src="/images/hesteria_section_2.png"
              alt="image hesteria collection"
              className=" rounded-sm border-2 border-black shadow absolute top-6 right-6 h-full w-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HesteriaSection;
