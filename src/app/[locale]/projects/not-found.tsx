import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";

export default function NotFound() {
  return (
    <div className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, we couldn&apos;t find the project you&apos;re looking for.
      </p>
      <Link href="/projects">
        <Button>Return to Portfolio</Button>
      </Link>
    </div>
  );
}
