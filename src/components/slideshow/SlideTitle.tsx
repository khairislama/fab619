interface Props {
  isCurrent: boolean;
  title: string;
}

function SlideTitle({ isCurrent, title }: Props) {
  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
      style={{
        opacity: isCurrent ? 1 : 0,
        transform: isCurrent ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s",
      }}
    >
      {title}
    </h1>
  );
}

export default SlideTitle;
