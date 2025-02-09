import { ItemProp } from "../../mocks/ItemsCollectionData";
import "./MasonryGrid.css";

interface TypeOfData {
  data: ItemProp[];
  Card: React.ElementType;
}

const customRowArr: string[][] = [
  // ["square", "", ""],
  // ["wide", "tall", "", ""],
];

const BentoGrid = ({ data, Card }: TypeOfData) => {

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-x-8 gap-y-12 auto-rows-auto">
        {data.map((card, i) => (
          <Card
            key={card.id}
            data={card}
            className={`relative ${customRowArr[i]  }`}
            layout={{
              // gridColumn:"span 4"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
