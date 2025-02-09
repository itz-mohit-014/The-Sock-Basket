import { useNavigate } from "react-router-dom";
import { ItemProp } from "../../mocks/ItemsCollectionData";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface InputValue {
  data: ItemProp;
  className: string;
  layout: any;
}

const CollectionItemCard = ({ data, className = "", layout }: InputValue) => {
  const navigate = useNavigate();

  const handleProductLink = () => navigate(`./${data.id}`);

  return (
    <div className={`${className}`} style={layout}>
      <div className="overflow-hidden w-full min-h-[200px]  relative group shadow-2xl animate-bg rounded-md">
        <img
          src={`/images/itemsCollectionImage/${data.images[0]}`}
          alt="dummy image"
          className="w-full object-cover h-full aspect-[5/4] object-bottom z-0  animate-bg"
          loading="lazy"
        />

        <span className="absolute top-4 right-4 outline-3 outline-[#daf099] inline-flex h-10 w-10 rounded-full bg-black text-white text-xl items-center justify-center active:scale-95 cursor-pointer">
          <AiOutlineShoppingCart className="" />
        </span>

        <div className="w-full absolute bottom-0 left-0 min-h-[100px] h-fit p-4 bg-linear-180 from- to-60% to-black transition-all duration-300 group-hover:translate-y-0 translate-y-1/1">
          <div className="p-2 text-white flex justify-between items-start flex-wrap gap-4">
            <div>
              <p className="text-xl font-medium mt-2">{data.title}</p>
              <p className="text-xs">
                {data.productDetailedDescirption.slice(0.5)}...
              </p>
            </div>

            <button
              onClick={handleProductLink}
              className="group/size flex h-10 items-center gap-2 rounded-full bg-[#daf099] pl-3 pr-4 transition-colors duration-300 ease-in-out hover:bg-black hover:pl-2 active:scale-95 cursor-pointer outline-2 outline-transparent hover:outline-[#daf099]"
            >
              <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover/size:bg-[#daf099]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover/size:translate-x-0 group-hover/size:text-lg group-hover/size:text-black group/size-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="font-medium  text-black  group-hover/size:text-white leading-0">
                Choose size
              </span>
            </button>
          </div>
        </div>
      </div>

      <span className="px-3 py-1 text-sm font-semibold absolute top-5 -left-2 z-10 rounded-full shadow-2xl bg-white/60 backdrop-blur-2xl text-black">
        {data.discount}% Discount
      </span>

      <div className="p-2 py-3">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <span className="text-3xl font-bold whitespace-nowrap">
            $ {Number(data.currentPrice).toFixed(2)}
          </span>

          <button className="relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black shadow-md group active:scale-95 cursor-pointer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              Buy Now
            </span>
            <span className="relative invisible">Buy Now</span>
          </button>
        </div>

        <p className="text-xl font-semibold skew-x-6 -mt-1.5">{data.title}</p>
        <p className="text-xs">{data.productDetailedDescirption}</p>
      </div>
    </div>
  );
};

export default CollectionItemCard;
