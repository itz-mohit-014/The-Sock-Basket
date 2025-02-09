import { useState } from "react";
import GetInTouch from "../Home/GetInTouch/GetInTouch";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const aboutLinks: String[] = [
  "Our Story",
  "Lookbook",
  "Stores",
  "Careet",
  "Press",
  "Sustainability",
];
const helpLinks: String[] = [
  "FAQ",
  "Shipping",
  "Returns",
  "Privacy Policy",
  "E-mail Privacy Policy",
  "Terms & Conditions",
];
const menuLinks: String[] = [
  "Men",
  "Women",
  "Kids",
  "Gifts",
  "Sale",
  "Limited edition",
];

const Footer = () => {

  const [email, setEmail] = useState("")

  return (
    <footer>
      <GetInTouch />

      <div className=" ">
        <hr className="w-full h-0.5 bg-black border-none" />

        <div className="grid  md:grid-cols-[1fr_2px_1fr] max-w-7xl mx-auto px-4">
          <div className="py-10 md:pr-10 flex justify-between ">
            <div>
              <h3 className="font-bold text-2xl italic">ABOUT US</h3>
              <ul className="mt-5 flex flex-col flex-wrap lg:max-h-[150px] justify-between gap-4 gap-x-8">
                {aboutLinks.map((link, i) => (
                  <li key={i} className="underline underline-offset-2">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl italic">HELP</h3>
              <ul className="mt-5 flex flex-col flex-wrap lg:max-h-[150px] justify-between gap-4 gap-x-8">
                {helpLinks.map((link, i) => (
                  <li key={i} className="underline underline-offset-2">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="h-full bg-black w-full border-none" />
          <div className="py-10 md:pl-10 ">
            <div className="flex justify-between items-start gap-3">
              <ul className="flex gap-4 flex-wrap items-center justify-start">
                {menuLinks.map((link, i) => (
                  <li
                    key={i}
                    className="px-5 py-1 rounded-full border-2 border-black cursor-pointer active:scale-95 transition-all duration-200"
                  >
                    {link}
                  </li>
                ))}
              </ul>
              <div className="min-w-8 w-8 h-8 rounded-full border-2 border-slate-700 grid place-items-center active:scale-95 cursor-pointer">
                <IoSearch className="text-lg text-slate-700" />
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-bold italic">NEWSLETTER</h3>
              <div className="py-2 pb-3 border-b-2 border-black flex gap-2 items-center justify-between ">
                <input
                  type="text"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail"
                  className="flex-1 text-base font-sans text-black placeholder:text-black border-none outline-none italic"
                />
                <img src="/images/right.svg" alt="arrow image" className="h-10 w-10 active:scale-95 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-0.5 bg-black border-none" />

        <div className="col-span-3 max-w-7xl mx-auto p-4 flex md:justify-between items-center  gap-4  gap-y-8 flex-wrap">
          <div className="flex gap-3 items-center justify-start">
            <div className="h-8 w-8">
              <img src="/icon.svg" alt="logo" className="" />
            </div>
            <p className="text-slate-800 text-base">@ Happy Socks 2025</p>
          </div>
          <p className="font-semibold text-base">
            Shipping to Global (en) &nbsp;
            <span className="underline underline-offset-2">Change</span>
          </p>
          <div>
            <ul className="flex gap-4 items-center justify-center">
              <li className="text-2xl p-0.5 cursor-pointer">
                <FaInstagram />
              </li>
              <li className="text-2xl p-0.5 cursor-pointer">
                <FaFacebook />
              </li>
              <li className="text-2xl p-0.5 cursor-pointer">
                <FaXTwitter />
              </li>
              <li className="text-2xl p-0.5 cursor-pointer">
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
