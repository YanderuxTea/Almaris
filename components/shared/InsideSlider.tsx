"use client";
import Link from "next/link";
import StarsForSlider from "./StarsForSlider";
import Image, { StaticImageData } from "next/image";
import { RefObject, useRef } from "react";
import clsx from "clsx";
import { NextFont } from "next/dist/compiled/@next/font";
interface IProps {
  imgArr: StaticImageData[];
  currentIndexRef: RefObject<number>;
  isFirstRender: boolean;
  isSwipe: RefObject<boolean>;
  swipeANIM: boolean;
  currentWidth: number;
  currentSideRef: RefObject<number>;
  currentPos: RefObject<number>;
  nextPos: RefObject<number>;
  startSwipe: (e: React.TouchEvent | React.MouseEvent) => void;
  endSwipe: () => void;
  swipeFunction: (e: React.TouchEvent | React.MouseEvent) => void;
  jost: NextFont;
}
export default function InsideSlider({
  imgArr,
  currentIndexRef,
  isFirstRender,
  isSwipe,
  swipeANIM,
  currentWidth,
  currentSideRef,
  currentPos,
  nextPos,
  startSwipe,
  endSwipe,
  swipeFunction,
  jost,
}: IProps) {
  const divArrRef = useRef<(HTMLDivElement | null)[]>([null]);
  return (
    <>
      {imgArr.map((image, index) => {
        return (
          <div
            key={index}
            ref={(el) => {
              divArrRef.current[index] = el;
            }}
            className={`object-cover object-left absolute w-full h-full ${
              index === currentIndexRef.current
                ? isFirstRender
                  ? "z-2 animate-none"
                  : isSwipe.current
                  ? "z-2 animate-none"
                  : swipeANIM
                  ? "z-2 animate-currentSlideSWIPE"
                  : "z-2 animate-currentSlide"
                : isFirstRender
                ? "z-1 animate-none"
                : isSwipe.current
                ? "z-1 animate-none"
                : swipeANIM
                ? "z-1 animate-nextSlideSWIPE"
                : "z-1 animate-nextSlide"
            }`}
            style={
              {
                "--current-width": `${currentWidth}px`,
                "--current-side": `${currentSideRef.current}`,
                "--current-pos": `${currentPos.current}%`,
                "--current-pos-next": `${nextPos.current}%`,
                transform: `${
                  isSwipe.current
                    ? currentIndexRef.current === index
                      ? `translateX(${currentPos.current}%)`
                      : `translateX(${nextPos.current}%)`
                    : "translateX(0%)"
                }`,
              } as React.CSSProperties
            }
          >
            <div
              className="absolute inset-0 z-2 flex justify-center items-center p-10"
              onTouchStart={(e: React.TouchEvent) => startSwipe(e)}
              onTouchEnd={() => endSwipe()}
              onTouchMove={(e: React.TouchEvent) => swipeFunction(e)}
              onMouseDown={(e: React.MouseEvent) => startSwipe(e)}
              onMouseUp={() => endSwipe()}
              onMouseMove={(e: React.MouseEvent) => swipeFunction(e)}
            >
              <div className="backdrop-blur-xl h-[calc(80%)]  aspect-square border-2 border-[#896E51] rounded-t-full overflow-hidden"></div>
            </div>
            <div
              className="absolute z-3 w-full flex justify-center flex-col text-white inset-0 items-center px-10 gap-5 select-none"
              onTouchStart={(e: React.TouchEvent) => startSwipe(e)}
              onTouchEnd={() => endSwipe()}
              onTouchMove={(e: React.TouchEvent) => swipeFunction(e)}
              onMouseDown={(e: React.MouseEvent) => startSwipe(e)}
              onMouseUp={() => endSwipe()}
              onMouseMove={(e: React.MouseEvent) => swipeFunction(e)}
            >
              <StarsForSlider
                index={index}
                currentIndex={currentIndexRef.current}
              />
              <h1
                className={`text-5xl text-center font-light tracking-[-2px] max-w-150 ${
                  index === currentIndexRef.current
                    ? "animate-animText"
                    : "animate-none"
                }`}
              >
                {index === 0
                  ? "Where Every Stay is Extraordinary"
                  : "Experience Hospitality Like Never Before"}
              </h1>
              <p
                className={clsx(
                  "text-white/75 text-center max-w-129",
                  jost.className,
                  `${
                    index === currentIndexRef.current
                      ? "animate-animText"
                      : "animate-none"
                  }`
                )}
              >
                Discover the perfect blend of luxury, comfort, and convenience
                at Almaris. Nestled in the heart of Brooklyn, our hotel is your
                gateway to an unforgettable experience.
              </p>
              <Link
                href={"/rooms"}
                className={clsx(
                  jost.className,
                  "text-xs px-5 py-2.5 font-medium tracking-[2px] bg-[#AB8965] cursor-pointer",
                  `${
                    index === currentIndexRef.current
                      ? "animate-animElements"
                      : "animate-none"
                  }`
                )}
              >
                DISCOVER ROOMS
              </Link>
            </div>
            <Image
              priority
              draggable={false}
              src={image}
              alt=""
              className="w-full h-full object-cover object-left brightness-75"
            />
          </div>
        );
      })}
    </>
  );
}
