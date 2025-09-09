interface IMenuIconProps {
  isOpen: boolean;
}
export default function MenuIcon({ isOpen }: IMenuIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-none lg:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21"
        className="stroke-white stroke-2"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
      <path
        d="M3 6H21"
        className={`stroke-white stroke-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-1.5" : ""
        }`}
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
      <path
        d="M3 18H21"
        className={`stroke-white stroke-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-y-1.5" : ""
        }`}
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
    </svg>
  );
}
