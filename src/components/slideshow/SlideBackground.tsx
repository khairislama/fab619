interface Props {
  image: string;
  isCurrent: boolean;
}

function SlideBackground({ image, isCurrent }: Props) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${image})`,
          transform: isCurrent ? "scale(1.05)" : "scale(1.15)",
          transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/70" />
    </>
  );
}

export default SlideBackground;
