function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}

export default BackgroundDecorations;
