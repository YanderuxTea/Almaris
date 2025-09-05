import UseCalendar from "@/public/Features/UseCalendar";
import BlockDaysOfWeek from "./BlockDaysOfWeek";
import { RefObject, useContext } from "react";
import { CalendarContext } from "@/public/Features/CalendarContext";
import { INext } from "@/public/Features/useCalendarConsts";
export interface IPropsBlock extends INext {
  firstClick: RefObject<boolean>;
}
export default function BlockTableForCalendar({
  firstClick,
  next,
}: IPropsBlock) {
  const valueForContext = useContext(CalendarContext);
  return (
    <table className="text-center">
      <BlockDaysOfWeek />
      <tbody>
        {UseCalendar(
          next
            ? valueForContext.nextMonthConst
            : valueForContext.curDateForCalendar,
          firstClick
        )}
      </tbody>
    </table>
  );
}
