import { jost } from "@/public/font";
import Arrow from "@/public/svg/Arrow";
import clsx from "clsx";
export default function ButtonsForHeader() {
  return (
    <div
      className={clsx(
        "mt-15.25 mb-7.5 flex flex-col text-white text-[17px] lg:flex-row lg:gap-10 lg:m-0",
        jost.className
      )}
    >
      <button className="py-3 text-left flex flex-row justify-between items-center gap-2 cursor-pointer">
        Rooms <Arrow />
      </button>
      <hr className="text-[#464646] lg:hidden" />
      <button className="py-3 text-left cursor-pointer">Reservation</button>
      <hr className="text-[#464646] lg:hidden" />
      <button className="py-3 text-left flex flex-row justify-between items-center gap-2 cursor-pointer">
        Pages <Arrow />
      </button>
      <hr className="text-[#464646] lg:hidden " />
      <button className="py-3 text-left cursor-pointer">News</button>
      <hr className="text-[#464646] lg:hidden " />
      <button className="py-3 text-left cursor-pointer">Contact</button>
      <hr className="text-[#464646] lg:hidden " />
    </div>
  );
}
