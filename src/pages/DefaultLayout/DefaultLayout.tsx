import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../../context/CartContext";
// import CustomerLove from "../../components/Home/CustomerLove/CustomerLove"

const DefaultLayout = () => {
  return (
    <CartProvider>
      <div className="bg-[#fae7e3]">
        <Header />
        <hr className="h-0.5 w-full bg-black" />
        <Outlet />
        {/* <CustomerLove/> */}
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
};

export default DefaultLayout;
