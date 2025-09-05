import BlockChoosesDates from "./BlockChoosesDates";
import BlockMonths from "./BlockMonths";
import BlockTableForCalendar, { IPropsBlock } from "./BlockTableForCalendar";

export default function FullBlockCalendar({ firstClick, next }: IPropsBlock) {
  return (
    <div className="flex flex-col gap-1.25">
      <BlockChoosesDates next={next} />
      <BlockMonths next={next} />
      <BlockTableForCalendar firstClick={firstClick} next={next} />
    </div>
  );
}
