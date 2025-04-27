interface Props {
  children: React.ReactNode;
}

function SlideContent({ children }: Props) {
  return (
    <div className="relative z-20 flex h-full items-center">
      <div className="container">
        <div className="w-full md:w-1/2 md:ml-auto lg:w-2/5 text-left">
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default SlideContent;
