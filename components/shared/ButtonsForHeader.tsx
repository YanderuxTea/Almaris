import Arrow from "@/public/svg/Arrow";
export default function ButtonsForHeader() {
  return (
    <>
      <button className="py-3 text-left flex flex-row justify-between items-center mt-15.25">
        Rooms <Arrow />
      </button>
      <hr className="text-[#464646]" />
      <button className="py-3 text-left">Reservation</button>
      <hr className="text-[#464646]" />
      <button className="py-3 text-left flex flex-row justify-between items-center">
        Pages <Arrow />
      </button>
      <hr className="text-[#464646]" />
      <button className="py-3 text-left">News</button>
      <hr className="text-[#464646]" />
      <button className="py-3 text-left">Contact</button>
      <hr className="text-[#464646] mb-7.5" />
    </>
  );
}
