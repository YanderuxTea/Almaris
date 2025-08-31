import LogoWhite from "@/public/svg/LogoWhite";
import Media from "../shared/Media";

export default function Footer() {
  return (
    <footer className="bg-[#181818] grid grid-cols-1 grid-auto-rows text-white gap-10 py-25">
      <div className="flex flex-col gap-2.5 items-center">
        <h3 className="text-xl">Address</h3>
        <p>742 Evergreen Terrace</p>
        <p>Brooklyn, NY 11201</p>
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <LogoWhite />
        <Media />
      </div>
      <div className="flex flex-col gap-2.5 items-center">
        <h3 className="text-xl">Contact Us</h3>
        <p>T. +929 333 9296</p>
        <p>M. contact@almaris.com</p>
      </div>
    </footer>
  );
}
