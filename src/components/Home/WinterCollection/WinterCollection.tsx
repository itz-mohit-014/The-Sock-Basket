import Button from "../../UI/Buttons";
import HeadingWithShades from "../../UI/HeadingWithShades";
import Marquee from "../GetInTouch/Marquee";

const WinterCollection = () => {
  const handleExploreCollection = () => {
    console.log("btn click");
  };

  return (
    <>
      <section className="max-w-7xl mx-auto p-4 font-sans min-h-screen pt-12 pb-12 mt-16 mb-24 max-lg:gap-y-52 grid grid-cols-1 lg:grid-cols-2">
        <div className="max-w-[80%] justify-self-center">
          <h1
            className="font- text-6xl sm:text-7xl font-bold px-4 drop-shadow-[8px_0px_0px_#dadada,_1px_1px_0px_#000000]"
            style={{ letterSpacing: "4px" }}
          ></h1>
          <HeadingWithShades
            text={
              <>
                {" "}
                <span className="-skew-x-[16deg] text-center">Winter</span>
                <span className="skew-x-[16deg]">Collection</span>
              </>
            }
            className={"flex flex-wrap justify-center gap-8 gap-y-0 "}
          />
          <p className="max-w-[480px] mx-auto my-12 text-center text-slate-800 font-sans text-xl">
            Dress up, without playing down your personal style with colorfull
            dress socks, guaranteed to be a conversation starter.
          </p>
          <div className="">
            <div className="w-fit max-lg:mx-auto mr-auto relative sm:translate-x-6 lg:translate-y-12">
              <div className="border-2 border-black min-w-[70vw] sm:min-w-[min(40vw,_320px)]  ml-auto aspect-square h-full"></div>
              <img
                src="./images/winter_collection_1.png"
                alt="image hesteria collection"
                className=" border-2 border-black shadow absolute top-6 right-6 h-full w-full object-cover rounded-sm"
              />
              <Button
                className={
                  "active:scale-95 max-lg:my-8 absolute z-10 max-lg:-bottom-48 lg:bottom-1 lg:translate-x-[30%] right-1/2 translate-x-1/2 lg:right-0 bg-[#daf099] rounded-[50%] text-black px-16 py-5 font-semibold text-3xl border-2 border-black"
                }
                text={"Explore"}
                onClick={handleExploreCollection}
              />
            </div>
          </div>
        </div>

        <div className="relative h-full w-full min-h-[80vh]">
          <div className="absolute top-0 right-0 h-[90%] w-[75%] border-2 border-black"></div>
          <div className="absolute top-5 right-5 h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-sm border-2 border-black shadow overflow-hidden ">
            <img
              src="./images/winter_collection_2.png"
              alt="image hesteria collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <Marquee text="BRINGING HAPPINESS AND COLORS" />
    </>
  );
};

export default WinterCollection;
