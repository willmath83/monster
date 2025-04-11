import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, ArrowRight } from "lucide-react";
import { Stars } from "@/components/ui/stars";
import { Site } from "@shared/schema";
import { Link } from "wouter";

type SiteCardProps = {
  site: Site;
};

export function SiteCard({ site }: SiteCardProps) {
  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
      <div className="relative">
        {site.badge && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            {site.badge}
          </div>
        )}
        <img 
          src={site.imageUrl}
          alt={site.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-dark">{site.name}</h3>
          {site.badge === "NEW" && (
            <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
          )}
          {site.badge === "HOT" && (
            <div className="bg-warning text-white text-xs font-bold px-2 py-1 rounded">HOT</div>
          )}
        </div>
        
        <div className="mb-3">
          <Stars rating={site.rating} />
        </div>
        
        <p className="text-gray-600 mb-4">{site.description}</p>
        
        <div className="bg-green-100 text-success font-bold text-sm p-2 rounded-md mb-4 flex items-center">
          <Gift className="mr-2 h-4 w-4" />
          {site.promoText}
        </div>
        
        <div className="flex justify-between mt-auto pt-3">
          <Link href={site.reviewUrl}>
            <a className="text-primary-500 font-bold hover:text-primary-600 flex items-center">
              <span>Read Full Review</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Link>
          <Button className="bg-accent-500 hover:bg-accent-600 text-white font-bold" asChild>
            <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
