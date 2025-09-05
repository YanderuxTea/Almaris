import { CalendarContext } from "@/public/Features/CalendarContext";
import { INext } from "@/public/Features/useCalendarConsts";
import clsx from "clsx";
import { useContext } from "react";

export default function ButtonsChangeMonths({ next }: INext) {
  const valueForContext = useContext(CalendarContext);
  return (
    <button
      className={clsx(
        "rounded-sm w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#EEEEEE] active:bg-[#EEEEEE] group",
        next ? "-rotate-90" : "rotate-90"
      )}
      onClick={() =>
        valueForContext.setCurDateForCalendar(
          new Date(
            valueForContext.year,
            next ? valueForContext.month + 1 : valueForContext.month - 1,
            1
          )
        )
      }
    >
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        className="fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          className="stroke-2 stroke-[#555555] transition-colors duration-300 ease-in-out group-hover:stroke-white group-active:stroke-white"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </svg>
    </button>
  );
}
