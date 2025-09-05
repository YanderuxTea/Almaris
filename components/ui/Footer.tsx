import LogoWhite from "@/public/svg/LogoWhite";
import Media from "../shared/Media";
import clsx from "clsx";
import { jost } from "@/public/font";

export default function Footer() {
  return (
    <footer className="bg-[#181818] grid grid-cols-1 grid-auto-rows text-white gap-10 py-25 lg:grid-cols-3 lg:grid-rows-1">
      <div className="flex flex-col gap-2.5 items-center">
        <h3 className="text-xl">Address</h3>
        <p className={clsx(jost.className)}>742 Evergreen Terrace</p>
        <p className={clsx(jost.className)}>Brooklyn, NY 11201</p>
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <LogoWhite />
        <Media />
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <h3 className="text-xl">Contact Us</h3>
        <p className={clsx(jost.className)}>T. +929 333 9296</p>
        <p className={clsx(jost.className)}>M. contact@almaris.com</p>
      </div>
    </footer>
  );
}
