type Props = {
  index: number;
  currentSlide: number;
  goToSlide: (value: number) => void;
};

function IndicatorButton({ index, currentSlide, goToSlide }: Props) {
  return (
    <button
      onClick={() => goToSlide(index)}
      className="group relative"
      aria-label={`Go to slide ${index + 1}`}
    >
      <div
        className={`w-3 h-3 rounded-full transition-all duration-500 ${
          index === currentSlide
            ? "bg-white scale-100"
            : "bg-white/40 scale-75 group-hover:bg-white/60 group-hover:scale-90"
        }`}
      />
      {index === currentSlide && (
        <div className="absolute -inset-1 rounded-full border border-white/50 animate-ping opacity-0"></div>
      )}
    </button>
  );
}

export default IndicatorButton;
