import { arrMainMenuButtonData } from "@/public/features/MainMenuButtonData";
import { jost } from "@/public/Fonts";
import Arrow from "@/public/svg/Arrow";
import Link from "next/link";
import { useState } from "react";
interface IMainMenu {
  isOpen: boolean;
}
export default function MainMenu({ isOpen }: IMainMenu) {
  return (
    <div
      className={`z-2 fixed w-full flex flex-col max-h-screen top-0 px-5 py-10 pt-22.5 transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      {arrMainMenuButtonData.map((element, index) => {
        const [isOpenList, setIsOpenList] = useState<boolean>(false);
        return (
          <div key={index}>
            <div className="flex flex-row justify-between">
              <Link
                href={element.href}
                className={`${jost.className} text-[#ECEFF3] text-[17px] py-2.5 w-max`}
              >
                {element.title}
              </Link>
              {element.isList ? (
                <button onClick={() => setIsOpenList(!isOpenList)}>
                  <Arrow rotate={isOpenList ? 180 : 0} />
                </button>
              ) : null}
            </div>
            <hr className="text-[#606060] lg:hidden" />
          </div>
        );
      })}
    </div>
  );
}
