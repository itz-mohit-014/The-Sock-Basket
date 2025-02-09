import {
  popularCardsData,
  DataInterface,
} from "../../../mocks/popularCardsData";
import HeadingWithShades from "../../UI/HeadingWithShades";
import Card from "./Card";

const Popoular = () => {

  return (
    <section className="max-w-7xl mx-auto p-4 font-sans  my-12 pt-16">
      <HeadingWithShades text={<p className="max-sm:text-center">Popular pairs</p>}/>

      <div className="relative mt-16 bg-red-300">
        <img
          src="/images/background_grid.svg"
          alt="svg image"
          className="absolute top-0 left-0 w-full h-full "
        />
        <div className=" px-8 py-16 sm:p-16 h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 gap-y-24">
        {popularCardsData.map((item: DataInterface) => (
          <Card key={item.id} data={item}/>
        ))}

        </div>
      </div>
    </section>
  );
};

export default Popoular;
