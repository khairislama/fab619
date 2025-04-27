interface Props {
  isCurrent: boolean;
  description: string;
}

function SlideDescription({ isCurrent, description }: Props) {
  return (
    <p
      className="text-base text-white/90 max-w-md"
      style={{
        opacity: isCurrent ? 1 : 0,
        transform: isCurrent ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s",
      }}
    >
      {description}
    </p>
  );
}

export default SlideDescription;
