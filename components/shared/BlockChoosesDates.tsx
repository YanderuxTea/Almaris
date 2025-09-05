import { CalendarContext } from "@/public/Features/CalendarContext";
import Month from "@/public/Features/Month";
import { INext } from "@/public/Features/useCalendarConsts";
import { jost } from "@/public/font";
import CalendarIcon from "@/public/svg/CalendarIcon";
import clsx from "clsx";
import { useContext } from "react";

export default function BlockChoosesDates({ next }: INext) {
  const { abbreviatedMonth } = Month();
  const valueForContext = useContext(CalendarContext);
  return (
    <div className="border border-[#CCCCCC] px-1 py-0.5 flex flex-row">
      <CalendarIcon />
      <p className={clsx(jost.className, "text-[#555555] select-none")}>
        {`${
          abbreviatedMonth[
            next
              ? valueForContext.nextDate.getMonth()
              : valueForContext.currDate.getMonth()
          ]
        } ${
          next
            ? valueForContext.nextDate.getDate()
            : valueForContext.currDate.getDate()
        }`}
      </p>
    </div>
  );
}
