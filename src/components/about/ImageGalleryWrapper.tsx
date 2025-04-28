import { useTranslations } from "next-intl";

interface Props {
  children: React.ReactNode;
}

function ImageGalleryWrapper({ children }: Props) {
  const translation = useTranslations("about");

  return (
    <div className="mt-24 md:mt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {translation("workspace")}
      </h2>

      {children}
    </div>
  );
}

export default ImageGalleryWrapper;
