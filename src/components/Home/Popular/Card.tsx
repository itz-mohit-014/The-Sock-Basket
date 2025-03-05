import { DataInterface, popularCardsData } from "../../../mocks/popularCardsData"
import Button from "../../UI/Buttons"
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

interface cardInputDetails {
    data : DataInterface,
    className?:String
}     

const Card = ({data, className}:cardInputDetails) => {

    const { dispatch } = useCart();
    const navigate = useNavigate();
    
    const handleCheckout = () => {
        
        const ItemToBePurchase = popularCardsData.find((item) => item.id ===  data.id);

        if(!ItemToBePurchase) return;

        // id:string,
        // title:string,
        // productShortDescirption:string,
        // productDetailedDescirption:string,
        // previousPrice:number,
        // currentPrice:number,
        // discount?:number,
        // avalSize: string[], 
        // images:string[],
        // isAvailable:boolean


        dispatch({
          type: "ADD_ITEM", 
          
          payload: {
            id:ItemToBePurchase.id,
            images: ItemToBePurchase.images,
            avalSize: ItemToBePurchase.avalSize,
            title: ItemToBePurchase.title,
            currentPrice: ItemToBePurchase.price ,
            previousPrice: ItemToBePurchase.price ,
            quantity: 1,
            isAvailable: true,
            productDetailedDescirption: ItemToBePurchase.description,
            productShortDescirption: ItemToBePurchase.description
        }
        })
    
        navigate('/cart');
      }
    

    return (
    <div className={`max-w-[320px] w-full relative border-2 border-black  aspect-square  rounded-sm ${className}`}>
        <img src={`/images/itemsCollectionImage/${data.images?.[0]}`} alt="socks image" className="h-full rounded-sm w-full object-cover"/>
        <Button onClick={handleCheckout} text={"Buy Now"} className={"border-2 border-black bg-[#ccf07d] font-sans text-3xl sm:text-4xl font-bold px-8 py-3 w-[90%] absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 active:scale-95"}/>
    </div>
  )
}

export default Card