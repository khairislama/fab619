import React from "react";

function ProgressBar({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
      <div
        className="h-full bg-white transition-all duration-300 ease-out"
        style={{
          width: isHovered ? "100%" : "0%",
          transition: isHovered ? "none" : "width 3s linear",
        }}
      />
    </div>
  );
}

export default ProgressBar;
