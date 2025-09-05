import React, { useRef } from "react";
import FullBlockCalendar from "./FullBlockCalendar";
import BlockButtonsForCalendar from "./BlockButtonsForCalendar";
export default function CalendarChooseDate() {
  const firstClick = useRef<boolean>(true);
  return (
    <div className="absolute bg-white border border-[#CCCCCC] rounded-sm grid grid-cols-1 p-2.5 gap-2.5 translate-y-60 lg:grid-cols-2 lg:translate-y-50">
      <FullBlockCalendar firstClick={firstClick} next={false} />
      <FullBlockCalendar firstClick={firstClick} next={true} />
      <BlockButtonsForCalendar />
    </div>
  );
}
