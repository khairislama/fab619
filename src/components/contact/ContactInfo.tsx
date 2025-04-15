import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-sm">
      {/* Phone Contact */}
      <div className="flex items-center space-x-2">
        <Phone className="h-6 w-6 flex-shrink-0 text-black" strokeWidth={1.5} />
        <div>
          <h3 className="font-bold uppercase text-xs">CONTACT US</h3>
          <p className="text-gray-800 text-xs whitespace-nowrap">
            +216 55 336 659
          </p>
          <p className="text-gray-800 text-xs whitespace-nowrap">
            +216 54 544 731
          </p>
        </div>
      </div>

      {/* Vertical Divider - visible only on lg and up */}
      <div className="hidden lg:block h-12 w-px bg-gray-300"></div>

      {/* Horizontal Divider - visible only on smaller screens */}
      <div className="lg:hidden h-px w-full bg-gray-300 my-2"></div>

      {/* Address */}
      <div className="flex items-center space-x-2">
        <MapPin
          className="h-6 w-6 flex-shrink-0 text-black"
          strokeWidth={1.5}
        />
        <div>
          <h3 className="font-bold uppercase text-xs">ADRESS</h3>
          <p className="text-gray-800 text-xs">
            FE/AR 03, Neotex,Fabrique entrepreneriale, Monastir
          </p>
          <p className="text-gray-800 text-xs">
            A8-8, Golden Towers, Centre Urbain Nord, Tunis
          </p>
        </div>
      </div>

      {/* Vertical Divider - visible only on lg and up */}
      <div className="hidden lg:block h-12 w-px bg-gray-300"></div>

      {/* Horizontal Divider - visible only on smaller screens */}
      <div className="lg:hidden h-px w-full bg-gray-300 my-2"></div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <Mail className="h-6 w-6 flex-shrink-0 text-black" strokeWidth={1.5} />
        <div>
          <h3 className="font-bold uppercase text-xs">E-MAILS</h3>
          <p className="text-gray-800 text-xs whitespace-nowrap">
            contact@fab619.tn
          </p>
          <p className="text-gray-800 text-xs whitespace-nowrap">
            alilakais@fab619.tn
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
