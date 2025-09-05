import { createContext } from "react";
import { ICalendar } from "./useCalendarConsts";
const defVal = {
  currentDate: new Date(),
  currDate: new Date(),
  nextDate: new Date(),
  setCurrDate: () => {},
  setNextDate: () => {},
  isChoose: false,
  setIsChoose: () => {},
  curDateForCalendar: new Date(),
  setCurDateForCalendar: () => {},
  year: 0,
  month: 0,
  nextMonthConst: new Date(),
};
export const CalendarContext = createContext<ICalendar>(defVal);
