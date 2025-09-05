import { useMemo } from "react";

export const fullMonth: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const fullDayName: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export default function Month() {
  const abbreviatedMonth = useMemo(
    () => fullMonth.map((month) => month.slice(0, 3)),
    []
  );
  const abbreviatedDayName = useMemo(
    () => fullDayName.map((day) => day.slice(0, 2)),
    []
  );

  return { abbreviatedMonth, abbreviatedDayName };
}
