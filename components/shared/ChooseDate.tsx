import { jost } from "@/public/font";
import clsx from "clsx";
import Month from "@/public/Features/Month";
import CalendarChooseDate from "./CalendarChooseDate";
import { CalendarContext } from "@/public/Features/CalendarContext";
import useCalendarConsts from "@/public/Features/useCalendarConsts";
export default function ChooseDate() {
  const { valueForContext } = useCalendarConsts();
  const { abbreviatedMonth } = Month();
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h6 className="text-sm text-[#AB8965]">Choose Date</h6>
        <p
          onClick={() => valueForContext.setIsChoose(true)}
          className={clsx(
            "text-xl text-center select-none cursor-pointer",
            jost.className
          )}
        >
          {`${
            abbreviatedMonth[valueForContext.currDate.getMonth()]
          } ${valueForContext.currDate.getDate()} - ${
            abbreviatedMonth[valueForContext.nextDate.getMonth()]
          } ${valueForContext.nextDate.getDate()}`}
        </p>
      </div>
      {valueForContext.isChoose ? (
        <CalendarContext.Provider value={valueForContext}>
          <CalendarChooseDate />
        </CalendarContext.Provider>
      ) : null}
    </>
  );
}
