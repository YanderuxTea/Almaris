import { CalendarContext } from "@/public/Features/CalendarContext";
import { IDaysButtons } from "@/public/Features/useCalendarConsts";
import { jost } from "@/public/font";
import clsx from "clsx";
import { useContext } from "react";
export default function ButtonsForDaysCalendar({
  dayDate,
  day,
  isPastDay,
  isSelected,
  inIsRange,
  firstClick,
}: IDaysButtons) {
  const valueForContext = useContext(CalendarContext);
  return (
    <td
      key={`calendar-day-${dayDate}`}
      className={clsx(
        "w-8 h-8 text-sm",
        isPastDay ? "text-[#CCCCCC]" : "text-[#555555]",
        jost.className
      )}
    >
      <button
        disabled={isPastDay}
        className={clsx(
          "w-full h-full",
          isPastDay
            ? ""
            : isSelected
            ? valueForContext.currDate.getTime() === dayDate.getTime() &&
              valueForContext.nextDate.getTime() === dayDate.getTime()
              ? "bg-[#357EBD] text-white rounded-sm"
              : valueForContext.currDate.getTime() === dayDate.getTime()
              ? "bg-[#357EBD] text-white rounded-l-sm"
              : valueForContext.nextDate.getTime() === dayDate.getTime()
              ? "bg-[#357EBD] text-white rounded-r-sm"
              : ""
            : inIsRange
            ? "bg-[#357EBDE6] text-white"
            : "",
          isPastDay ? "" : "cursor-pointer"
        )}
        onClick={() =>
          isPastDay
            ? null
            : firstClick.current
            ? (valueForContext.setCurrDate(dayDate),
              valueForContext.setNextDate(dayDate),
              (firstClick.current = false))
            : dayDate < valueForContext.currDate
            ? (valueForContext.setCurrDate(dayDate),
              valueForContext.setNextDate(dayDate),
              (firstClick.current = false))
            : (valueForContext.setNextDate(dayDate),
              (firstClick.current = true))
        }
      >
        {day}
      </button>
    </td>
  );
}
