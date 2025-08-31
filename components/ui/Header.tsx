"use client";
import LogoWhite from "@/public/svg/LogoWhite";
import MenuMobile from "@/public/svg/MenuMobile";
import { useEffect, useRef, useState } from "react";
import ButtonsForHeader from "../shared/ButtonsForHeader";
import Link from "next/link";
export default function Header() {
  const ref = useRef<HTMLHeadElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);
  const scrollTop = useRef<number>(0);
  const refBackground = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    function transformHeader() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        ref.current && (ref.current.style.transform = "translateY(-100%)");
      } else if (currentScrollY < lastScrollY.current) {
        ref.current && (ref.current.style.transform = "translateY(0)");
      }
      if (window.pageYOffset === 0) {
        ref.current && (ref.current.style.transform = "translateY(0)");
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", transformHeader);
    return () => {
      window.removeEventListener("scroll", transformHeader);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      scrollTop.current = window.pageYOffset;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.position = "fixed";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      refMenu.current && (refMenu.current.style.transform = "translateY(0%)");
      refBackground.current &&
        (refBackground.current.style.transform = "translateY(0%)");
    } else {
      document.body.style.top = -scrollTop + "px";
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.position = "unset";
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
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
        className="bg-[#181818] w-full px-5 py-2.5 fixed transition-transform duration-300 ease-in-out justify-between flex flex-row items-center z-11"
      >
        <Link href={"/"}>
          <LogoWhite />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuMobile isOpen={isOpen} />
        </button>
      </header>
      <div
        ref={refMenu}
        className="max-h-screen w-full bg-[#181818] fixed z-10 transition-transform duration-300 ease-in-out flex flex-col px-5 text-[#eceff3] overflow-y-auto"
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
