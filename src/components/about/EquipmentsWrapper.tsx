import { useTranslations } from "next-intl";

interface Props {
  children: React.ReactNode;
}

function EquipmentsWrapper({ children }: Props) {
  const translation = useTranslations("about.equipments");

  return (
    <div className="mt-24 md:mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4"> {translation("title")} </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {translation("description")}
        </p>
      </div>
      {children}
    </div>
  );
}

export default EquipmentsWrapper;
