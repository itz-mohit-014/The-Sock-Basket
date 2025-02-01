import { ReactNode } from "react";

type InputValue = {
  text : String | ReactNode;
  className?:String
}

const HeadingWithShades = ({ text, className }: InputValue) => {
  return (
    <h1
      className={`text-5xl sm:text-7xl font-bold -skew-x-12 drop-shadow-[8px_0px_0px_#dadada,_1px_1px_0px_#000000] ${className}`}
      style={{
        letterSpacing: "6px",
      }}
    >
      {text}
    </h1>
  );
};

export default HeadingWithShades;
