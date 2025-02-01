import { DataInterface } from "../../../mocks/popularCardsData"
import Button from "../../UI/Buttons"

interface cardInputDetails {
    data : DataInterface,
    className?:String
}     

const Card = ({data, className}:cardInputDetails) => {
    
    return (
    <div className={`max-w-[320px] w-full relative border-2 border-black  aspect-square  rounded-sm ${className}`}>
        <img src={`./images/${data.images?.[0]}`} alt="socks image" className="h-full rounded-sm w-full object-cover"/>
        <Button text={"Buy Now"} className={"border-2 border-black bg-[#ccf07d] font-sans text-3xl sm:text-4xl font-bold px-8 py-3 w-[90%] absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 active:scale-95"}/>
    </div>
  )
}

export default Card