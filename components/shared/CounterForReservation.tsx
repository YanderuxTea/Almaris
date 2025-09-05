import { jost } from "@/public/font";
import clsx from "clsx";
import React from "react";
interface IProps {
  title: string;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
export default function CounterForReservation({
  title,
  counter,
  setCounter,
}: IProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h6 className="text-sm text-[#AB8965]">{title}</h6>
      <div>
        <button
          className={clsx(
            "text-2xl w-9 h-9 bg-[#AB8965] rounded-full active:bg-white active:text-black cursor-pointer transition-colors duration-200 ease-in-out",
            jost.className
          )}
          onClick={() => setCounter((prev) => (prev !== 0 ? prev - 1 : prev))}
        >
          -
        </button>
        <input
          disabled
          type="text"
          className={clsx("text-xl w-12 text-center", jost.className)}
          value={counter}
        />
        <button
          className={clsx(
            "text-2xl w-9 h-9 bg-[#AB8965] rounded-full active:bg-white active:text-black cursor-pointer transition-colors duration-200 ease-in-out",
            jost.className
          )}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
