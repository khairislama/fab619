import { Skeleton } from "@/components/ui/skeleton";

export function PressItemsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col">
          <div className="flex items-center border-t border-gray-300 py-3">
            <div className="flex items-center">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="ml-2 h-4 w-24" />
            </div>
            <Skeleton className="ml-auto h-4 w-20" />
          </div>

          <Skeleton className="h-7 w-3/4 mt-4" />
          <Skeleton className="h-5 w-1/2 mt-2" />

          <div className="space-y-2 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <Skeleton className="w-full h-60 mt-6" />
        </div>
      ))}
    </div>
  );
}
