import clsx from "clsx";
import { NextFont } from "next/dist/compiled/@next/font";
import { RefObject } from "react";
interface IProps {
  jost: NextFont;
  currentIndexRef: RefObject<number>;
}
export default function CounterForSlider({ jost, currentIndexRef }: IProps) {
  return (
    <p
      className={clsx(
        "absolute z-3 bottom-10 right-10 text-xl text-white",
        jost.className
      )}
    >
      {currentIndexRef.current + 1} / <span className="text-[#878684]">2</span>
    </p>
  );
}
