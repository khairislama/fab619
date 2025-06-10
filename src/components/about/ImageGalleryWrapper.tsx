import { useTranslations } from "next-intl";

interface Props {
  children: React.ReactNode;
}

function ImageGalleryWrapper({ children }: Props) {
  const translation = useTranslations("about");

  return (
    <div className="mt-12 md:mt-14 bg-card/40 rounded-2xl py-10 max-w-5xl mx-auto shadow-sm">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {translation("workspace")}
      </h2>

      {children}
    </div>
  );
}

export default ImageGalleryWrapper;
