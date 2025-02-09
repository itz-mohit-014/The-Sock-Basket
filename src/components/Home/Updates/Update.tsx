import { useEffect, useState } from "react";
import { updateCardData, CardValue } from "../../../mocks/updateCardData";
import HeadingWithShades from "../../UI/HeadingWithShades";

interface UpdateCardValue {
  data: CardValue;
  index: number;
  currentCard: number | null;
  setCurrent: (i: number | null) => void;
}

const UpdateCard = ({
  index,
  data,
  currentCard,
  setCurrent,
}: UpdateCardValue) => {
  const handleSetCurrentCard = (i: number | null) => {
    setCurrent(currentCard === i ? null : i);
  };

  useEffect(() => {

    // window.addEventListener('resize', () => {
    //   console.log(window.screen.width)
      
    // })
    // console.log(window.screen.width)
  })


  return (
    <div
      onMouseEnter={() => handleSetCurrentCard(index)}
      onMouseLeave={() => handleSetCurrentCard(null)}
      className="border-b-2 border-black grid grid-cols-1 sm:grid-cols-2 gap-x-2 py-6 px-4"
    >
      <div className="flex items-center gap-2">
        <div className="w-28 text-sm font-medium py-2 px-8 relative after:content-[''] after:absolute after:inset-0 after:border-2 after:border-black after:rounded-[100%_90%_80%_80%]">
          {data.tag}
        </div>
        <div className="h-20 w-full flex items-center justify-center ">
          <img
            src={`/images/update_${index + 1}.webp`}
            alt=""
            className={`h-52 w-52 overscroll-contain transition-all duration-300 rotate-12 border-[2px] border-black rounded-lg bg-radial from-slate-100 to-slate-950 ${
              index == currentCard ? "scale-100" : "scale-0"
            }`}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl italic font-normal">{data.heading}</h1>
          <span className="text-xs font-medium leading-8">{data.category}</span>
        </div>
        <div
          className={`${
            index == currentCard
              ? "scale-100 -rotate-12"
              : "scale-0 -rotate-0"
          }  transition-all duration-300`}
        >
          <img
            src="/images/right.svg"
            alt="arrow image"
            className={`h-10 w-10 active:scale-95 scale-x-150  cursor-pointer `}
          />
        </div>
      </div>
    </div>
  );
};

const Update = () => {
  const [currentCard, setCurrentCard] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto p-4 font-sans  my-12 pt-16">
      <HeadingWithShades
        text={"Updates"}
        className={"text-center !text-5xl lg:!text-6xl"}
      />
      <hr className="border-none h-[2px] w-full bg-black mt-20" />

      <div>
        {updateCardData.map((item, i) => (
          <UpdateCard
            key={i}
            index={i}
            data={item}
            currentCard={currentCard}
            setCurrent={setCurrentCard}
          />
        ))}
      </div>
    </section>
  );
};

export default Update;
