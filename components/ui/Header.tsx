"use client";
import { jost } from "@/public/Fonts";
import Logo from "@/public/svg/Logo";
import MenuIcon from "@/public/svg/MenuIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import FunctionHeader from "@/public/features/FunctionHeader";
import { arrMainMenuButtonData } from "@/public/features/MainMenuButtonData";
import Arrow from "@/public/svg/Arrow";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { result, isTopPage, currentWidth } = FunctionHeader({
    setIsOpen: setIsOpenMenu,
  });
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenMenu]);
  return (
    <>
      <header
        className={`${
          jost.className
        } flex px-5 py-2.5 lg:px-10 items-center justify-center text-white z-10 fixed w-full transition-all duration-300 ease-in-out translate-y-[${
          result ? (isTopPage ? 0 : -100) : 0
        }%] before:absolute before:bg-[#181818] before:w-full before:h-full before:z-10 before:lg:hidden`}
        style={{
          backgroundColor: `${
            currentWidth >= 1024
              ? isTopPage
                ? "transparent"
                : "#181818"
              : "#181818"
          }`,
        }}
      >
        <div className="flex flex-row justify-between w-full max-w-300 z-10">
          <Link href={"/"} onClick={() => setIsOpenMenu(false)}>
            <Logo />
          </Link>
          <div className="hidden lg:flex flex-row gap-7.5 items-center">
            {arrMainMenuButtonData.map((element, index) => {
              return (
                <div key={index} className="flex flex-row gap-1">
                  <Link href={`${element.href}`}>{element.title}</Link>
                  {element.isList ? <Arrow /> : null}
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-5 lg:gap-0 items-center">
            <Link
              href={"/"}
              className="hidden md:block font-medium text-xs py-2.5 px-5 tracking-[2px] border border-white/35 transition-colors duration-300 ease-in-out active:bg-[#AB8965] hover:bg-[#AB8965]"
            >
              RESERVATION
            </Link>
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <MenuIcon isOpen={isOpenMenu} />
            </button>
          </div>
        </div>
        {currentWidth >= 1024 ? null : <MainMenu isOpen={isOpenMenu} />}
      </header>
      {currentWidth >= 1024 ? null : (
        <div
          className={`z-1 fixed bg-[#181818] w-full min-h-screen transition-transform duration-300 ease-in-out ${
            isOpenMenu ? "translate-y-0" : "translate-y-[-100%]"
          }`}
        ></div>
      )}
    </>
  );
}
