import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  backgroundImage,
}: ServiceCardProps) {
  return (
    <div className="relative h-[270px] 2xl:h-[300px] group overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-300"
        quality={80}
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between">
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-md w-fit">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="object-cover w-10 h-10"
          />
        </div>
        <h3 className="text-lg 2xl:text-xl font-bold text-white">{title}</h3>
        <p className="text-xs 2xl:text-sm text-white/90">{description}</p>
        <Button
          variant="outline"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/80 border-white/20 rounded-none"
        >
          <Link href={{ pathname: "/services", hash: id }} className="w-full">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}
