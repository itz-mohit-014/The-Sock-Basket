export interface DataInterface {
    id: string;
    images: string[];
    title: string;
    description: string;
    price: number;
    avalSize: string[];
  }
  
  export const popularCardsData: DataInterface[] = [
    {
      id: "1",
      images: ["popular_1.png"],
      title: "Rainbow Stripes Socks",
      description: "Bright and colorful striped socks to add joy to your day.",
      price: 12.99,
      avalSize: ["39-41", "42-44"],
    },
    {
      id: "2",
      images: ["popular_2.png"],
      title: "Polka Dot Fun Socks",
      description: "Cheerful polka dot socks that bring a playful touch to your outfit.",
      price: 11.50,
      avalSize: ["36-38", "39-41", "42-44"],
    },
    {
      id: "3",
      images: ["popular_3.png"],
      title: "Funky Animal Socks",
      description: "Express yourself with these fun animal-print socks!",
      price: 14.99,
      avalSize: ["39-41", "42-44", "45-47"],
    },
  ];
  