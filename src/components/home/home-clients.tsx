import Image from "next/image";
import { Marquee } from "../Marquee";
import { useTranslations } from "next-intl";
import {
  CLIENTS_LOGOS_EDUC,
  CLIENTS_LOGOS_INDUS,
  CLIENTS_LOGOS_ING,
} from "@/settings/data/clients";

function HomeClients() {
  const t = useTranslations("home.clients");
  return (
    <section id="clients" className="container mx-auto my-20 snap-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="order-2 md:order-1">
          <Image
            src={"/images/clients-and-partners.webp"}
            alt={"3d printer board"}
            width={625}
            height={399}
            className="rounded-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl mb-6 max-w-xl">
            {t.rich("title", {
              bolder: (chunks) => (
                <span className="font-extrabold">
                  {chunks}
                  <br />
                </span>
              ),
            })}
          </h2>
          <p>
            {t.rich("description", {
              underline: (chunks) => (
                <span className="underline font-bold">{chunks}</span>
              ),
            })}
          </p>
        </div>
      </div>
      <div className="-ml-8">
        <Marquee
          key={"marquee-1"}
          showDelay={0}
          duration={15}
          CLIENTS_LOGOS={CLIENTS_LOGOS_ING}
        />
      </div>
      {/* Inverted and slower */}
      <div className="-ml-8 2xl:ml-24 2xl:-mr-10">
        <Marquee
          key={"marquee-2"}
          showDelay={0.3}
          rtl
          duration={25}
          CLIENTS_LOGOS={CLIENTS_LOGOS_EDUC}
        />
      </div>
      <div className="-ml-8 2xl:ml-8 2xl:-mr-6">
        <Marquee
          key={"marquee-3"}
          showDelay={0.6}
          duration={20}
          CLIENTS_LOGOS={CLIENTS_LOGOS_INDUS}
        />
      </div>
    </section>
  );
}

export default HomeClients;
