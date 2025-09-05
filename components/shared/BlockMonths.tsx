import { CalendarContext } from "@/public/Features/CalendarContext";
import { fullMonth } from "@/public/Features/Month";
import { INext } from "@/public/Features/useCalendarConsts";
import { jost } from "@/public/font";
import clsx from "clsx";
import { useContext } from "react";
import ButtonsChangeMonths from "./ButtonsChangeMonths";

export default function BlockMonths({ next }: INext) {
  const valueForContext = useContext(CalendarContext);
  const nextButton: boolean = true;
  return (
    <div className="flex flex-row items-center justify-center gap-2.5 select-none">
      <ButtonsChangeMonths />
      <p className={clsx("text-sm text-[#555555] font-bold", jost.className)}>
        {`${
          fullMonth[
            next
              ? valueForContext.nextMonthConst.getMonth()
              : valueForContext.month
          ]
        } ${
          next
            ? valueForContext.nextMonthConst.getFullYear()
            : valueForContext.year
        }`}
      </p>
      <ButtonsChangeMonths next={nextButton} />
    </div>
  );
}
