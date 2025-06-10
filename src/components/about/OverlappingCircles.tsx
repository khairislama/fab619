import Image from "next/image";

export default function OverlappingCircles() {
  return (
    <div className="relative w-full mx-auto h-[500px]">
      {/* Large circle in the center */}
      <div className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96 rounded-full border-2 border-white overflow-hidden drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
          <Image
            src="/images/placeholder-800x800.webp"
            alt="Large circle image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Small circle bottom left */}
      <div className="absolute left-[1%] top-[55%] md:left-[5%] lg:left-[23%] lg:top-[55%]">
        <div className="relative w-60 h-60 rounded-full border-2 border-white overflow-hidden drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
          <Image
            src="/images/placeholder-800x800.webp"
            alt="Small circle image 1"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Small circle bottom right */}
      <div className="absolute right-[1%] top-[60%] md:right-[15%] md:top-[55%] lg:right-[25%] lg:top-[50%]">
        <div className="relative w-52 h-52 rounded-full border-2 border-white overflow-hidden drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
          <Image
            src="/images/placeholder-800x800.webp"
            alt="Small circle image 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
