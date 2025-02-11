import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

function Maintenance() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <Image
        src="/maintenance-background.webp"
        alt="Background"
        width={2000}
        height={1500}
        className="object-cover w-full h-full -z-10"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 35))}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute top-4 md:top-8 left-16 lg:left-28 w-3/5 lg:w-1/3 h-screen">
        <Link href="/" className="origin-left">
          <Image
            src="/logo-white.svg"
            alt="logo fab 619"
            width={200}
            height={73}
            className="h-28 w-28 md:h-36 md:w-36"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(200, 35)
            )}`}
          />
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Under <br /> Maintenance
        </h1>
        <p className="text-sm md:text-base font-light mb-4 text-justify">
          Our team is currently updating the website to provide you with an
          enhanced user experience. Feel free to contact us directly for any
          immediate assistance or inquiries.
        </p>
        <ContactForm />
        <div className="flex w-full max-w-sm items-center justify-around">
          <Link href="https://www.facebook.com/fab619" target="_blank">
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={50}
              height={50}
              className="h-6 w-6"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 35)
              )}`}
            />
          </Link>
          <Link href="https://www.instagram.com/fab_619" target="_blank">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={50}
              height={50}
              className="h-6 w-6"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 35)
              )}`}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/fab619/" target="_blank">
            <Image
              src="/linkedIn.svg"
              alt="linkedIn"
              width={50}
              height={50}
              className="h-6 w-6"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 35)
              )}`}
            />
          </Link>
          <Link href="https://github.com/fab619" target="_blank">
            <Image
              src="/github.svg"
              alt="github"
              width={50}
              height={50}
              className="h-6 w-6"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 35)
              )}`}
            />
          </Link>
        </div>
        <p className="absolute text-xs font-extralight tracking-tighter bottom-10">
          © Copyrights FAB619-On demand fabrication | All Rights Reserved
        </p>
      </div>
      <div className="hidden lg:block absolute h-screen top-36 right-20 w-1/3">
        <div className="text-right flex flex-col gap-10 text-gray-400">
          <p className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out">
            Digital Fabrication
          </p>
          <p className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out">
            Custom CNC Machining
          </p>
          <p className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out">
            Hardware Design <br />& prototyping
          </p>
          <p className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out">
            Electronics& Embedded
            <br /> Systems
          </p>
          <p className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out">
            Software & Machine <br />
            Control Algorithms
          </p>
        </div>
        <p className="absolute bottom-40 right-2 text-right text-gray-400 text-sm">
          B125 ,Fabrique Entrepreneuriale,
          <br />
          Néotex Menzel Harb 5036 <br />
          Monastir ,Tunisie
        </p>
      </div>
    </div>
  );
}

export default Maintenance;
