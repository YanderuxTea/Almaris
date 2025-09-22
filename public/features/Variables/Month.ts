import {useMemo} from 'react'

export const fullMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
export const fullDay = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]
export default function Month() {
  const abbreviatedMonth = useMemo(() => fullMonth.map((month) => month.slice(0, 3)), [fullMonth])
  const abbreviatedDay = useMemo(() => fullDay.map((day) => day.slice(0, 2)), [fullDay])
  return {abbreviatedMonth, abbreviatedDay}
}