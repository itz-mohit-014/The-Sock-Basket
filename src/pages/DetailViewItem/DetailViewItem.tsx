import { useParams } from "react-router-dom";
import {
  ItemProp,
  WinterCollectionItems,
} from "../../mocks/ItemsCollectionData";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Popoular from "../../components/Home/Popular/Popoular";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

const DetailViewItem = () => {
  const { itemId } = useParams();
  const [showDescription, setShowDescription] = useState(true);
  const [showSize, setShowSize] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sizeRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState<ItemProp | null | undefined>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    // dummy items from one static file...

    const findData: ItemProp | undefined = WinterCollectionItems.find(
      (item) => item.id === itemId
    );

    setData(findData);
  }, []);

  const handleAddItemToCart = () => {

    if(data) {
      
      dispatch({
        type: "ADD_ITEM", 
        payload : {...data, quantity: 1}
      })
      toast.dismiss();
      toast.success("Item added in the cart")
    }
  }

  if (!data) return;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4 font-sans my-8">
      <div className="w-full h-full max-h-[400px]">
        {data?.images?.map((img, i) => (
          <img
            className="h-full w-full object-cover"
            src={`/images/itemsCollectionImage/${img}`}
            alt=""
            key={i}
          />
        ))}
      </div>

      <div className="md:px-4 space-y-4 pb-5">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold font-serif italic">
          {data?.title}
        </h2>

        <div className="border-b-4 border-black/70 pb-4 mt-8">
          <div
            onClick={() => setShowDescription(!showDescription)}
            className="flex justify-between items-center gap-2 font-bold uppercase text-2xl cursor-pointer text-slate-600"
          >
            <span className="text-2xl text-red-800">Description</span>
            <span
              className={`transition-transform duration-300 ${
                showDescription ? "rotate-0" : "rotate-135"
              }`}
            >
              <IoClose />
            </span>
          </div>
          <div
            ref={contentRef}
            className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
            style={{
              maxHeight: showDescription
                ? `${contentRef.current?.scrollHeight}px`
                : "0px",
            }}
          >
            <p className="mt-2">{data?.productShortDescirption}</p>
            <p>{data?.productDetailedDescirption}</p>
          </div>
        </div>

        <div className="border-b-4 border-black/70 pb-2">
          <div
            onClick={() => setShowSize(!showSize)}
            className="flex justify-between items-center gap-2 font-bold uppercase text-2xl cursor-pointer text-slate-600"
          >
            <span className="text-2xl text-red-800">Available Size</span>
            <span
              className={`transition-transform duration-300 ${
                showSize ? "rotate-0" : "rotate-135"
              }`}
            >
              <IoClose />
            </span>
          </div>

          <div
            ref={sizeRef}
            className="transition-[max-height] duration-500 mt-4 ease-in-out overflow-hidden"
            style={{
              maxHeight: showSize
                ? `${sizeRef.current?.scrollHeight}px`
                : "0px",
            }}
          >
            <div className="space-x-2">
              {data?.avalSize.map((size) => (
                <span className="inline-block rounded-full px-8 py-2.5 border-[3px] border-black text-xl font-medium font-serif">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="font-semibold font-serif text-4xl max-md:text-left text-right">
          {" "}
          ${data?.currentPrice! * 100}
        </p>

        <div className="text-center">
          <button
          onClick={handleAddItemToCart}
            className={
              "active:scale-95 max-lg:my-8 bg-[#daf099] rounded-[50%] text-black px-20 py-6 font-semibold text-3xl border-2 border-black "
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="md:col-span-2 border-y-4 border-dotted">
        <Popoular />
      </div>
    </div>
  );
};

export default DetailViewItem;
