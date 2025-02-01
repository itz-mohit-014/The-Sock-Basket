import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import CustomerLove from "../../components/Home/CustomerLove/CustomerLove"
import Hero from "../../components/Home/HeroSection/Hero"
import HesteriaSection from "../../components/Home/HesteriaSection/HesteriaSection"
import Popoular from "../../components/Home/Popular/Popoular"
import Update from "../../components/Home/Updates/Update"
import WinterCollection from "../../components/Home/WinterCollection/WinterCollection"

const Home = () => {
  return (
    <div className="bg-[#fae7e3]">
        <Header/>
        <hr className="h-0.5 w-full bg-black"/>
        <Hero/>
        <HesteriaSection/>
        <Popoular/>
        <Update/>
        <WinterCollection/>
        <CustomerLove/>
        <Footer/>
    </div>
  )
}

export default Home