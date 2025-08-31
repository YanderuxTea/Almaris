import Star from "@/public/svg/Star";
import { JSX } from "react";
interface IProps {
  index: number;
  currentIndex: number;
}
export default function StarsForSlider({ index, currentIndex }: IProps) {
  const arrStar: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    arrStar.push(<Star key={i} scale={0.18} />);
  }
  return (
    <div
      className={`flex flex-row w-max gap-2.5 ${
        index === currentIndex ? "animate-animElements" : "animate-none"
      }`}
    >
      {arrStar}
    </div>
  );
}
