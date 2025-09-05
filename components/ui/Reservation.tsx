"use client";
import { jost } from "@/public/font";
import clsx from "clsx";
import Link from "next/link";
import CounterForReservation from "../shared/CounterForReservation";
import ChooseDate from "../shared/ChooseDate";
import { useState } from "react";

export default function Reservation() {
  const [countAdult, setCountAdult] = useState<number>(1);
  const [countChildren, setCountChildren] = useState<number>(0);
  return (
    <>
      <div className="bg-[#181818] text-white w-full">
        <div className="grid grid-cols-1 place-items-center p-6.5 gap-8 lg:grid-rows-1 lg:grid-cols-[auto_auto_auto_auto_auto] w-max mx-auto lg:gap-18">
          <h3 className="text-[26px]">Reservation</h3>
          <ChooseDate />
          <CounterForReservation
            title={"Adult"}
            counter={countAdult}
            setCounter={setCountAdult}
          />
          <CounterForReservation
            title={"Children"}
            counter={countChildren}
            setCounter={setCountChildren}
          />
          <Link
            href={"/rooms"}
            className={clsx(
              "bg-[#AB8965] text-xs tracking-[2px] font-medium px-5 py-3 w-max",
              jost.className
            )}
          >
            CHECK AVAILABILITY
          </Link>
        </div>
      </div>
      <div className="bg-white w-full h-50"></div>
    </>
  );
}
