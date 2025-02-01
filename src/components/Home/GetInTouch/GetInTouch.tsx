import Marquee from "./Marquee"

const GetInTouch = () => {
  return (
    <section>
        <h1 className='text-6xl font-sans font-bold text-center'>Get In Touch</h1>
        <Marquee text={"BE THE FIRST TO GET SPECIAL PROMOTION"}/>

        <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 sm:grid-cols-2 items-start justify-center grid-cols-1 gap-x-8 gap-y-16 pt-10">
            <div className=" overflow-hidden">
                <img src="./images/get_in_touch_1.png" alt="image" className="border-2 border-black rounded-sm h-full w-full object-center  max-w-[400px]"/>
            </div>
            <div  className="sm:order-2 lg:order-1 lg:col-span-1 sm:col-span-2 flex-col flex items-center justify-center  overflow-hidden">
                <img src="./images/get_in_touch_2.png" alt="image" className="border-2 border-black rounded-sm h-full w-full object-center max-w-[400px]"/>
                <p className="text-center font-medium text-md my-4">@HAPPYSOCKS</p>
            </div>
            <div className="sm:order-1 lg:order-2  overflow-hidden" > 
                <img src="./images/get_in_touch_3.png" alt="image" className="border-2 border-black rounded-sm h-full w-full object-center  max-w-[400px]"/>
            </div>
        </div>

    </section>
  )
}

export default GetInTouch