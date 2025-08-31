import Arrow from "@/public/svg/Arrow";
interface IProps {
  buttonSlideFunction: (side: number) => void;
}
export default function ButtonsForSlider({ buttonSlideFunction }: IProps) {
  return (
    <>
      <button
        className="p-5 rotate-90 z-3 cursor-pointer"
        onClick={() => buttonSlideFunction(-1)}
      >
        <Arrow color="A48461" scale={2} />
      </button>
      <button
        className="p-5 -rotate-90 z-3 cursor-pointer"
        onClick={() => buttonSlideFunction(1)}
      >
        <Arrow color="A48461" scale={2} />
      </button>
    </>
  );
}
