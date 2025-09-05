"use client";
import LogoWhite from "@/public/svg/LogoWhite";
import MenuMobile from "@/public/svg/MenuMobile";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ButtonsForHeader from "../shared/ButtonsForHeader";
import Link from "next/link";
import clsx from "clsx";
import { jost } from "@/public/font";
export default function Header() {
  const ref = useRef<HTMLHeadElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);
  const refBackground = useRef<HTMLDivElement>(null);
  const scrollY = useRef<number>(0);
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useLayoutEffect(() => {
    setCurrentWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    function transformHeader() {
      const currentScroll = window.scrollY;
      if (
        currentScroll > scrollY.current &&
        document.body.style.overflow !== "hidden"
      ) {
        ref.current && (ref.current.style.transform = "translateY(-100%)");
      } else {
        ref.current && (ref.current.style.transform = "translateY(0%)");
      }
      scrollY.current = currentScroll;
      scrollY.current === 0 ? setScroll(false) : setScroll(true);
      console.log(currentScroll, scrollY);
    }
    function setCurW() {
      setCurrentWidth(window.innerWidth);
    }
    window.addEventListener("resize", setCurW);
    window.addEventListener("scroll", transformHeader);
    return () => {
      window.removeEventListener("scroll", transformHeader);
      window.removeEventListener("resize", setCurW);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      refMenu.current && (refMenu.current.style.transform = "translateY(0%)");
      refBackground.current &&
        (refBackground.current.style.transform = "translateY(0%)");
    } else {
      document.body.style.overflow = "unset";
      refMenu.current &&
        (refMenu.current.style.transform = "translateY(-100%)");
      refBackground.current &&
        (refBackground.current.style.transform = "translateY(-100%)");
    }
  }, [isOpen]);
  return (
    <>
      <header
        ref={ref}
        className={clsx(
          "bg-[#181818] w-full px-5 py-2.5 fixed transition-all duration-300 ease-in-out justify-between flex flex-row items-center z-11 lg:justify-center lg:gap-25",
          scroll ? "lg:bg-[#181818]" : "lg:bg-transparent"
        )}
      >
        <Link href={"/"}>
          <LogoWhite />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <MenuMobile isOpen={isOpen} />
        </button>

        {currentWidth >= 1024 ? (
          <>
            <ButtonsForHeader />{" "}
            <button
              className={clsx(
                jost.className,
                "font-medium text-xs text-white tracking-[2px] border border-white/35 transition-colors duration-300 ease-in-out hover:bg-[#AB8965] cursor-pointer px-5 py-2.5"
              )}
            >
              RESERVATION
            </button>
          </>
        ) : null}
      </header>
      <div
        ref={refMenu}
        className="max-h-screen w-full bg-[#181818] fixed z-10 transition-transform duration-300 ease-in-out flex flex-col px-5 overflow-y-auto"
      >
        <ButtonsForHeader />
      </div>
      <div
        ref={refBackground}
        className="bg-[#181818] fixed min-h-screen w-full transition-transform duration-300 ease-in-out z-4"
      ></div>
    </>
  );
}
