interface IArrow {
  color?: string;
  scale?: number;
  rotate?: number;
}
export default function Arrow({ color, scale, rotate }: IArrow) {
  const strokeColor = color ? `#${color}` : "#FFFFFF";
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className="fill-none transition-transform duration-300 ease-in-out"
      style={{
        scale: `${scale ? scale : 1}`,
        rotate: `${rotate ? rotate : 0}deg`,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24976 9.98169L12.2498 15.9817L18.2498 9.98169"
        className={`stroke-2 stroke-${strokeColor}`}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: strokeColor,
        }}
      />
    </svg>
  );
}
