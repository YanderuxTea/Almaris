"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";

import { jost } from "@/public/font";
import SliderFunction from "@/public/functions/SliderFunction";
import ButtonsForSlider from "./ButtonsForSlider";
import CounterForSlider from "./CounterForSlider";
import InsideSlider from "./InsideSlider";
export default function SliderMain() {
  const {
    setCurrentWidth,
    setIntervalFunction,
    handleWidth,
    intervalRef,
    buttonSlideFunction,
    currentIndexRef,
    imgArr,
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
  } = SliderFunction();

  useLayoutEffect(() => {
    setCurrentWidth(window.innerWidth); //Установка ширины экрана до рендеринга
  }, []);

  useEffect(() => {
    setIntervalFunction(); //Установка перелистывания по интервалу
    window.addEventListener("resize", handleWidth); //Триггер на ресайз окна
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className="min-h-screen flex relative overflow-hidden justify-between items-center">
      <ButtonsForSlider buttonSlideFunction={buttonSlideFunction} />
      <CounterForSlider jost={jost} currentIndexRef={currentIndexRef} />
      <InsideSlider
        imgArr={imgArr}
        currentIndexRef={currentIndexRef}
        isFirstRender={isFirstRender}
        isSwipe={isSwipe}
        swipeANIM={swipeANIM}
        currentWidth={currentWidth}
        currentSideRef={currentSideRef}
        currentPos={currentPos}
        nextPos={nextPos}
        startSwipe={startSwipe}
        endSwipe={endSwipe}
        swipeFunction={swipeFunction}
        jost={jost}
      />
    </div>
  );
}
