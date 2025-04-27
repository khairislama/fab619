type Props = {
  children: React.ReactNode;
};

function SlideIndicators({ children }: Props) {
  return (
    <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
      {children}
    </div>
  );
}

export default SlideIndicators;
