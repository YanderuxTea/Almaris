"use client";
import clsx from "clsx";
import LoaderSpinner from "../shared/LoaderSpinner";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsTransition(true);
      setTimeout(() => {
        if (ref.current) ref.current.style.display = "none";
        document.body.style.overflow = "unset";
      }, 500);
    }, 500);
  }, []);
  return (
    <div
      ref={ref}
      className={clsx(
        "flex items-center min-h-screen transition-opacity duration-500 ease-in-out bg-white z-50 w-full fixed",
        isTransition ? "opacity-0 " : "opacity-100 "
      )}
    >
      <LoaderSpinner />
    </div>
  );
}
