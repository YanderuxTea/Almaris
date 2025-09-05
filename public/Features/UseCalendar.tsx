import React, { JSX, RefObject, useContext } from "react";
import { CalendarContext } from "./CalendarContext";
import ButtonsForDaysCalendar from "@/components/shared/ButtonsForDaysCalendar";

export default function UseCalendar(
  currentDateForCalendar: Date,
  firstClick: RefObject<boolean>
) {
  {
    const valueForContext = useContext(CalendarContext);
    const year = currentDateForCalendar.getFullYear();
    const month = currentDateForCalendar.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = (firstDay.getDay() + 6) % 7;
    const endDayOfWeek = (startDayOfWeek + lastDay.getDate()) % 7;
    const calendarDays: JSX.Element[] = [];
    const rows: JSX.Element[] = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      calendarDays.push(<td className="w-8 h-8" key={`start-empty-${i}`}></td>);
    }
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dayDate = new Date(year, month, day);
      dayDate.setHours(0, 0, 0, 0);
      const isSelected =
        dayDate.getTime() === valueForContext.currDate.getTime() ||
        dayDate.getTime() === valueForContext.nextDate.getTime();
      const isPastDay = dayDate < valueForContext.currentDate;
      const inIsRange =
        dayDate.getTime() > valueForContext.currDate.getTime() &&
        dayDate.getTime() < valueForContext.nextDate.getTime() &&
        !isPastDay;
      calendarDays.push(
        <ButtonsForDaysCalendar
          key={`button-${dayDate}`}
          dayDate={dayDate}
          day={day}
          isPastDay={isPastDay}
          isSelected={isSelected}
          inIsRange={inIsRange}
          firstClick={firstClick}
        />
      );
    }
    for (let i = endDayOfWeek; i < 7 && endDayOfWeek !== 0; i++) {
      calendarDays.push(<td key={`empty-end-${i}`} className="w-8 h-8"></td>);
    }
    for (let i = 0; i < calendarDays.length; i += 7) {
      rows.push(<tr key={`row-${i}`}>{calendarDays.slice(i, i + 7)}</tr>);
    }
    return rows;
  }
}
