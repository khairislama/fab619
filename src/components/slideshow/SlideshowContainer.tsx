type Props = {
  children: React.ReactNode;
  setIsHovered: (value: boolean) => void;
};

function SlideshowContainer({ children, setIsHovered }: Props) {
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

export default SlideshowContainer;
