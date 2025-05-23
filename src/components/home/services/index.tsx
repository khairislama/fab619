import Image from "next/image";
import React from "react";
import ServiceCard from "./services-card";
import {
  Code2,
  Cpu,
  GraduationCap,
  Ruler,
  Settings,
  Torus,
} from "lucide-react";

function HomeServices() {
  return (
    <section className="relative container mx-auto my-28">
      <div className="relative w-full h-[200px] lg:h-[250px] overflow-hidden">
        <Image
          src="/images/placeholder-1920x1080.webp"
          alt="Blueprint background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <p className="text-lg md:text-xl font-medium">
                We offer a <span className="font-bold">wide range</span> of
              </p>
              <p className="text-lg md:text-xl font-medium">
                innovative{" "}
                <span className="font-bold">Manufacturing services</span>
              </p>
              <p className="text-lg md:text-xl font-medium">
                from <span className="font-bold">concept</span> to{" "}
                <span className="font-bold">final product</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-2">
        {/* Custom Machinery */}
        <ServiceCard
          icon={"/icons/settings.svg"}
          title="Custom Machinery"
          description="Machinery development / Automation Systems / Advanced Robotics"
          backgroundImage="/images/placeholder-800x800.webp"
        />

        {/* 3D Printing & CNC */}
        <ServiceCard
          icon={"/icons/printer3d.svg"}
          title="3D printing & CNC machining"
          description="On-Demand Manufacturing / rapid prototyping / customized production"
          backgroundImage="/images/placeholder-800x800.webp"
        />

        {/* IOT & Electronics */}
        <ServiceCard
          icon={"/icons/electronics.svg"}
          title="IOT & Electronics"
          description="Electronic circuits /PCB Design & IOT integration / Embedded Software"
          backgroundImage="/images/placeholder-800x800.webp"
        />

        {/* Hardware Design */}
        <ServiceCard
          icon={"/icons/design.svg"}
          title="Hardware design"
          description="Product design / Hardware Engineering / Prototyping / Electronic integration"
          backgroundImage="/images/placeholder-800x800.webp"
        />

        {/* Machine Software */}
        <ServiceCard
          icon={"/icons/software.svg"}
          title="Machine Software"
          description="Machine Control Algorithms, Real-time system Monitoring & Custom Software"
          backgroundImage="/images/placeholder-800x800.webp"
        />

        {/* Workshop & Training */}
        <ServiceCard
          icon={"/icons/workshop.svg"}
          title="Workshop & Training"
          description="Technical Documentation / Hands-On Workshops / Training sessions"
          backgroundImage="/images/placeholder-800x800.webp"
        />
      </div>
    </section>
  );
}

export default HomeServices;
