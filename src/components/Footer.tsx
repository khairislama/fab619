import { SOCIAL } from "@/settings/navigation";
import Link from "next/link";

function Footer() {
  return (
    <div className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <div className="h-1 w-full bg-foreground my-6 scrollbar-hide" />
      <div className="flex items-center justify-between">
        <p>© Copyrights FAB619-On demand fabrication | All Rights Reserved</p>
        <div className="flex space-x-4">
          {SOCIAL.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hover:text-card-foreground/60 transition-colors duration-200 ease-in-out"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
