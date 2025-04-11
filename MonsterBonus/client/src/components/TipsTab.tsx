import { useQuery } from "@tanstack/react-query";
import { TipCard } from "@/components/TipCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Tip } from "@shared/schema";
import { MonsterCards } from "@/assets/svg/monster-cards";

export function TipsTab() {
  const { data: tips, isLoading, error } = useQuery<Tip[]>({
    queryKey: ['/api/tips'],
    queryFn: async () => {
      const res = await fetch('/api/tips?limit=10');
      if (!res.ok) throw new Error('Failed to fetch tips');
      return res.json();
    }
  });

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center mb-8">
          <div className="h-10 w-10 rounded-lg bg-gray-200 mr-3"></div>
          <Skeleton className="h-8 w-56" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="p-4 border rounded-lg">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <div className="flex justify-between mb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !tips) {
    return (
      <div className="bg-red-50 p-4 rounded-xl text-red-500 text-center">
        Failed to load betting tips. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-dark mb-8 flex items-center">
        <span className="accent-gradient text-white h-10 w-10 rounded-lg flex items-center justify-center mr-3">
          <MonsterCards className="h-6 w-6" />
        </span>
        Latest Betting Tips
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
