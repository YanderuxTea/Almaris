import Month from "@/public/Features/Month";
import { jost } from "@/public/font";
import clsx from "clsx";

export default function BlockDaysOfWeek() {
  const { abbreviatedDayName } = Month();
  return (
    <thead>
      <tr>
        {abbreviatedDayName.map((day, index) => {
          return (
            <th
              key={index}
              className={clsx(
                jost.className,
                "font-bold text-[#555555] w-8 h-8 text-sm select-none"
              )}
            >
              {day}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
