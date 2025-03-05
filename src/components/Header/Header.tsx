import { IoSearch } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const navLink: String[] = [
    "Men",
    "Women",
    "Gifts",
    "Kids",
    "Limited edition",
    "Sale",
  ];

  const { state } = useCart();
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  }

  return (
    <header>
      <nav className="flex items-center justify-between  gap-2 max-w-7xl mx-auto p-4 font-sans overflow-x-auto">
        <Link className="h-10 w-10 shrink-0" to={"/"}>
          <img src="/icon.svg" alt="logo" className="" />
        </Link>
        <div className="flex-1 ">
          <ul className="flex justify-center items-center gap-2">
            {navLink.map((link, index) => (
              <li
                key={index}
                className="px-4 py-0.5 text-nowrap rounded-full border-2 border-black text-md font-medium text-slate-900 active:scale-95 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-1.5 ">
          <div className="w-8 h-8 rounded-full border-2 border-slate-700 grid place-items-center active:scale-95 cursor-pointer relative">
            <IoSearch className="text-lg text-slate-700" />
          </div>

          <div className="w-8 h-8 rounded-full border-2 border-slate-700 grid place-items-center active:scale-95 cursor-pointer relative" onClick={handleGoToCart}>
            <span className="absolute top-0 -translate-y-3 translate-x-2 px-1.5 font-medium aspect-square right-0 text-sm bg-[#dff0a3] border border-black rounded-full">
              {totalItems}
            </span>
            <PiHandbagBold className="text-lg text-slate-700" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
