import CustomerLove from "../../components/Home/CustomerLove/CustomerLove"
import Hero from "../../components/Home/HeroSection/Hero"
import HesteriaSection from "../../components/Home/HesteriaSection/HesteriaSection"
import Popoular from "../../components/Home/Popular/Popoular"
import Update from "../../components/Home/Updates/Update"
import WinterCollection from "../../components/Home/WinterCollection/WinterCollection"

const Home = () => {
  return (
    <div className="bg-[#fae7e3]">
        <Hero/>
        <HesteriaSection/>
        <Popoular/>
        <Update/>
        <WinterCollection/>
        <CustomerLove/>
    </div>
  )
}

export default Home