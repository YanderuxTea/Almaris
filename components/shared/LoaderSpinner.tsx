export default function LoaderSpinner() {
  return (
    <div className="w-16 h-16 mx-auto relative animate-spinLoader">
      {[...Array(8)].map((_, i) => {
        const rotation = -45 - i * 20;
        return (
          <div
            key={i}
            className="absolute w-full h-full after:content-[''] after:bg-[#AB8965] after:absolute after:w-1.5 after:h-1.5 after:rounded-full animate-dotSpinLoader"
            style={
              {
                "--base-rotation": `${rotation}deg`,
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${i * 0.1}s`,
              } as any
            }
          ></div>
        );
      })}
    </div>
  );
}
