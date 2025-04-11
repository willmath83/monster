import { useQuery } from "@tanstack/react-query";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Banner } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export function BannerCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [apiIndex, setApiIndex] = useState(0);
  
  const { data: banners, isLoading, error } = useQuery<Banner[]>({
    queryKey: ['/api/banners'],
  });
  
  const getBadgeClass = (color?: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-500 text-white';
      case 'secondary':
        return 'bg-secondary-500 text-white';
      case 'accent':
      default:
        return 'bg-accent-500 text-white';
    }
  };
  
  if (isLoading) {
    return (
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="flex space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative min-w-[calc(100%-40px)] md:min-w-[calc(33.333%-16px)] rounded-xl overflow-hidden shadow-lg h-64">
              <Skeleton className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error || !banners) {
    return (
      <div className="bg-red-50 p-4 rounded-xl text-red-500 text-center mb-12">
        Failed to load banner data. Please try again later.
      </div>
    );
  }
  
  return (
    <div className="relative mb-12 overflow-hidden">
      <Carousel 
        className="w-full"
        onSelect={(i) => {
          setActiveSlide(i);
          setApiIndex(i % banners.length);
        }}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={banner.id} className="basis-full md:basis-1/3">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  {banner.badge && (
                    <div className={`${getBadgeClass(banner.badgeColor)} text-sm font-bold px-3 py-1 rounded-full w-fit mb-2`}>
                      {banner.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{banner.title}</h3>
                  <p className="text-white text-opacity-90">{banner.subtitle}</p>
                  <Button 
                    className="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-md font-bold transition duration-200 w-fit"
                    asChild
                  >
                    <a href={banner.buttonUrl} target="_blank" rel="noopener noreferrer">
                      {banner.buttonText}
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 bg-dark/50 hover:bg-dark/70 text-white rounded-full w-10 h-10 flex items-center justify-center border-none" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 bg-dark/50 hover:bg-dark/70 text-white rounded-full w-10 h-10 flex items-center justify-center border-none" />
      </Carousel>
      
      {/* Carousel indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {banners.map((_, index) => (
          <div 
            key={index}
            className={`w-3 h-3 rounded-full ${index === apiIndex ? 'bg-accent-500' : 'bg-gray-300'} cursor-pointer`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
