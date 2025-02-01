import { IoSearch } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";

const Header = () => {
  const navLink: String[] = [
    "Men",
    "Women",
    "Gifts",
    "Kids",
    "Limited edition",
    "Sale",
  ];

  return (
    <header>
      <nav className="flex items-center justify-between  gap-2 max-w-7xl mx-auto p-4 font-sans overflow-x-auto">
        <div className="h-10 w-10">
          <img src="./icon.svg" alt="logo" className="" />
        </div>
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
          {[IoSearch, PiHandbagBold].map((Icon, index) => {
            return (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-slate-700 grid place-items-center active:scale-95 cursor-pointer"
              >
                <Icon className="text-lg text-slate-700" />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
