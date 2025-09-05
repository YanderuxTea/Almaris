import React, { RefObject, useState } from "react";
export interface ICalendar {
  currentDate: Date;
  currDate: Date;
  nextDate: Date;
  setCurrDate: React.Dispatch<React.SetStateAction<Date>>;
  setNextDate: React.Dispatch<React.SetStateAction<Date>>;
  isChoose: boolean;
  setIsChoose: React.Dispatch<React.SetStateAction<boolean>>;
  curDateForCalendar: Date;
  setCurDateForCalendar: React.Dispatch<React.SetStateAction<Date>>;
  year: number;
  month: number;
  nextMonthConst: Date;
}
export interface IDaysButtons {
  dayDate: Date;
  day: number;
  isPastDay: boolean;
  isSelected: boolean;
  inIsRange: boolean;
  firstClick: RefObject<boolean>;
}
export interface INext {
  next?: boolean;
}
export default function useCalendarConsts() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [currDate, setCurrDate] = useState<Date>(currentDate);
  const nextDateConst = new Date(currentDate);
  nextDateConst.setDate(currentDate.getDate() + 1);
  const [nextDate, setNextDate] = useState<Date>(nextDateConst);
  const [isChoose, setIsChoose] = useState<boolean>(false);
  const [curDateForCalendar, setCurDateForCalendar] =
    useState<Date>(currentDate);
  const year = curDateForCalendar.getFullYear();
  const month = curDateForCalendar.getMonth();
  const nextMonthConst = new Date(curDateForCalendar);
  nextMonthConst.setMonth(curDateForCalendar.getMonth() + 1);
  const valueForContext = {
    currentDate,
    currDate,
    nextDate,
    setCurrDate,
    setNextDate,
    isChoose,
    setIsChoose,
    curDateForCalendar,
    setCurDateForCalendar,
    year,
    month,
    nextMonthConst,
  };
  return { valueForContext };
}
