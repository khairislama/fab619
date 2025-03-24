import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, we couldn&apos;t find the project you&apos;re looking for.
      </p>
      <Link href="/maintenance/preview/portfolio">
        <Button>Return to Portfolio</Button>
      </Link>
    </div>
  );
}
