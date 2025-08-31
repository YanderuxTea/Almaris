interface IProps {
  color?: string;
  scale?: number;
}
export default function Arrow({ color, scale }: IProps) {
  const strokeColor = color ? `#${color}` : "#ffffff";
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      className="fill-none"
      style={{ scale: scale ? scale : 1 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        className="stroke-2"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: strokeColor,
        }}
      />
    </svg>
  );
}
