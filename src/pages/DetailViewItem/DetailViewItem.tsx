import { useParams } from "react-router-dom"
import { ItemProp, WinterCollectionItems } from "../../mocks/ItemsCollectionData"


const DetailViewItem = () => {

    const {itemId} = useParams();

    const data: ItemProp | undefined = WinterCollectionItems.find(item => item.id === itemId);

    console.log(data)


  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full max-h-[400px]">
        {
          data?.images?.map((img,i) => 
            <img className="h-full w-full object-cover" src={`/images/itemsCollectionImage/${img}`} alt="" key={i} />
          )
        }
      </div>

      <div>
        <h2>{data?.title}</h2>
        <p>{data?.productShortDescirption}</p>
        <p>{data?.productDetailedDescirption}</p>
        <p>{data?.currentPrice}</p>
      
      </div>
    </div>
  )
}

export default DetailViewItem