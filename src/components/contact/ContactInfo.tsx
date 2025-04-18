import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function ContactInfo() {
  const translation = useTranslations("contact");

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-sm">
      {/* Phone Contact */}
      <div className="flex items-center space-x-2">
        <Phone className="h-8 w-8 flex-shrink-0" />
        <div>
          <h3 className="font-bold uppercase">{translation("contact-us")}</h3>
          <p className="text-xs whitespace-nowrap">+216 55 336 659</p>
          <p className="text-xs whitespace-nowrap">+216 54 544 731</p>
        </div>
      </div>

      {/* Vertical Divider - visible only on lg and up */}
      <div className="hidden lg:block h-12 w-[2px] bg-foreground"></div>

      {/* Horizontal Divider - visible only on smaller screens */}
      <div className="lg:hidden h-[2px] w-full bg-foreground my-2"></div>

      {/* Address */}
      <div className="flex items-center space-x-2">
        <MapPin className="h-8 w-8 flex-shrink-0" />
        <div>
          <h3 className="font-bold uppercase">{translation("address")}</h3>
          <p className="text-xs md:whitespace-nowrap">
            FE/AR 03, Neotex,Fabrique entrepreneriale, Monastir
          </p>
          <p className="text-xs md:whitespace-nowrap">
            A8-8, Golden Towers, Centre Urbain Nord, Tunis
          </p>
        </div>
      </div>

      {/* Vertical Divider - visible only on lg and up */}
      <div className="hidden lg:block h-12 w-[2px] bg-foreground"></div>

      {/* Horizontal Divider - visible only on smaller screens */}
      <div className="lg:hidden h-[2px] w-full bg-foreground my-2"></div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <Mail className="h-8 w-8 flex-shrink-0" />
        <div>
          <h3 className="font-bold uppercase">E-MAILS</h3>
          <p className="text-xs whitespace-nowrap">contact@fab619.tn</p>
          <p className="text-xs whitespace-nowrap">alilakais@fab619.tn</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
