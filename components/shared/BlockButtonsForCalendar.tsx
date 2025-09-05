import { CalendarContext } from "@/public/Features/CalendarContext";
import { jost } from "@/public/font";
import clsx from "clsx";
import { useContext } from "react";

export default function BlockButtonsForCalendar() {
  const valueForContext = useContext(CalendarContext);
  const newCurrentDate = new Date(valueForContext.currentDate);
  const newNextDate = new Date(newCurrentDate);
  newNextDate.setDate(newCurrentDate.getDate() + 1);
  return (
    <div className="flex flex-row gap-1 h-max">
      <button
        onClick={() => valueForContext.setIsChoose(false)}
        className={clsx(
          jost.className,
          "cursor-pointer relative text-sm bg-[#AB8965] px-4.75 py-1.25 rounded-sm before:transition-opacity before:duration-300 before:ease-in-out before:absolute before:inset-0 before:rounded-sm before:w-full before:opacity-0 before:outline-4 before:outline-[#9DCCB6] focus:before:opacity-100"
        )}
      >
        Apply
      </button>
      <button
        onClick={() => (
          valueForContext.setCurrDate(newCurrentDate),
          valueForContext.setNextDate(newNextDate)
        )}
        className={clsx(
          jost.className,
          "cursor-pointer relative text-sm text-[#212529] px-2.25 rounded-sm before:transition-opacity before:duration-300 before:ease-in-out before:absolute before:inset-0 before:rounded-sm before:w-full before:opacity-0 before:outline-4 before:outline-[#C2DBFE] focus:before:opacity-100"
        )}
      >
        Reset
      </button>
    </div>
  );
}
