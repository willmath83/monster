import { useQuery } from "@tanstack/react-query";
import { SiteCard } from "@/components/SiteCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Site } from "@shared/schema";
import { MonsterDice } from "@/assets/svg/monster-dice";

export function CasinoTab() {
  const { data: sites, isLoading, error } = useQuery<Site[]>({
    queryKey: ['/api/sites', 'casino'],
    queryFn: async () => {
      const res = await fetch('/api/sites?category=casino');
      if (!res.ok) throw new Error('Failed to fetch casino sites');
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Skeleton className="w-full h-48" />
              <div className="p-6">
                <Skeleton className="h-7 w-48 mb-3" />
                <Skeleton className="h-4 w-24 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-10 w-full mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-9 w-32" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !sites) {
    return (
      <div className="bg-red-50 p-4 rounded-xl text-red-500 text-center">
        Failed to load casino sites. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-dark mb-8 flex items-center">
        <span className="gradient-bg text-white h-10 w-10 rounded-lg flex items-center justify-center mr-3">
          <MonsterDice className="h-6 w-6" />
        </span>
        Top Casino Sites
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}
