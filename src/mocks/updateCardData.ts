export interface CardValue {
  id: number;
  heading: string;
  tag: string;
  image: string;
  category: string;
}

export const updateCardData: CardValue[] = [
  {
    id: 1,
    image: "./images/update_1.webp",
    heading: "Hungry Morning Pack",
    tag: "SPECIAL GIFTS",
    category: "LIMITED EDITION",
  },
  {
    id: 2,
    image: "./images/update_1.webp",
    heading: "The Beatles Collector",
    tag: "BEST SELLER",
    category: "BOX SET PACK",
  },
  {
    id: 3,
    image: "./images/update_1.webp",
    heading: "DISNEY GIFT BOX 4",
    tag: "DISNEY",
    category: "DISNEY GIFT",
  },
  {
    id: 4,
    image: "./images/update_1.webp",
    heading: "Holiday Socks Gift Box",
    tag: "BEST SELLER",
    category: "LIMITED EDITION",
  },
];
