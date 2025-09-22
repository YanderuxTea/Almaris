import React from 'react'

export interface IVariablesCalendarProps {
  currentDate: Date
  currentNextDate: Date
  setCurrentNextDate: React.Dispatch<React.SetStateAction<Date>>
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

export default function VariablesCalendar() {
  const curDate = new Date()
  curDate.setHours(0, 0, 0, 0)
  const nextDate = new Date(curDate)
  nextDate.setDate(curDate.getDate() + 1)
  const [currentDate, setCurrentDate] = React.useState<Date>(curDate)
  const [currentNextDate, setCurrentNextDate] = React.useState<Date>(nextDate)
  const [currentMonth, setCurrentMonth] = React.useState(curDate)
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const nextMonth = new Date(currentMonth)
  nextMonth.setMonth(currentMonth.getMonth() + 1)
  const variables = {
    currentDate,
    currentNextDate,
    setCurrentNextDate,
    setCurrentDate
  }
  return {variables}
}