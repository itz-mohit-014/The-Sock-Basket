import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/UI/Buttons";
import HeadingWithShades from "../../components/UI/HeadingWithShades";
import { FaChevronDown } from "react-icons/fa";
import CollectionItemCard from "../../components/Collections/CollectionItemCard";
import {
  ItemProp,
  WinterCollectionItems,
} from "../../mocks/ItemsCollectionData";
import BentoGrid from "../../components/BentoGrid/BentoGrid";

interface pagesContent {
  description: string;
}

const content: pagesContent[] = [
  {
    description:
      "Dress up without compromising your personal style with our vibrant and colorful dress socks. Designed to add a playful twist to any outfit, these socks are not only comfortable but also guaranteed to be a conversation starter wherever you go. Make a bold statement with every step you take, and let your socks do the talking!",
  },
  {
    description:
      " These Hysteria designs have nothing to hide nor should you. Break the pattern and mix, or match, it up. From tights and liner socks, to keen-high and ankel socks, these bold prints will bring out your personality in many unexpected and unique ways.",
  },
];

const Collection = () => {
  const { collectionName } = useParams();
  const [cards, setCards] = useState<ItemProp[]>([]);

  const handleLoadMoreProduct = () => {
    // make functionality working use just for demo...
    if (cards.length == WinterCollectionItems.length) return;

    const next = WinterCollectionItems.slice(cards.length, cards.length + 7);

    setCards((prev) => [...prev, ...next]);

  };

  useEffect(() => {
    setCards(WinterCollectionItems.slice(cards.length, cards.length + 7));
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-4 font-sans ">
      <header>
        <HeadingWithShades
          className={"py-8 capitalize drop-shadow-none font-semibold"}
          text={`${collectionName} Collection`}
        />
        <p className="text-xl font-light">
          {collectionName === "Winter"
            ? content[0].description
            : content[1].description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 items-center justify-end  my-16 *:sm:max-w-[300px]">
          <p className="text-4xl">
            Featured <span className="text-slate-600 text-base ">86</span>
          </p>
          <div className="border-b-2 border-black px-12 py-3 text-center text-lg place-self-center">
            SORT BY <FaChevronDown className="inline-block" />
          </div>
          <div className="border-b-2 border-black px-12 py-3 text-right text-xl max-md:place-self-center place-self-end max-sm:col-span-1 max-md:col-span-2 ">
            Filter <FaChevronDown className="inline-block" />
          </div>
        </div>
      </header>

      <main className="border-t-2 border-black w-full py-24 ">
        <BentoGrid data={cards} Card={CollectionItemCard} />
      </main>

      <footer className="text-center border-y-2 border-black py-6 md:py-8 px-4">
        <Button
          className={
            "active:scale-95 max-lg:my-8 bg-[#daf099] rounded-[50%] text-black px-20 py-6 font-semibold text-3xl border-2 border-black "
          }
          text={"Explore"}
          onClick={handleLoadMoreProduct}
        />
      </footer>
    </section>
  );
};

export default Collection;
