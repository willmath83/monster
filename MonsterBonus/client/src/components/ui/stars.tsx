import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

type StarsProps = {
  rating: number; // Rating out of 50 (e.g., 45 = 4.5 stars)
  className?: string;
  showText?: boolean;
};

export function Stars({ rating, className, showText = true }: StarsProps) {
  // Convert to a rating out of 5
  const ratingOutOf5 = rating / 10;
  
  const fullStars = Math.floor(ratingOutOf5);
  const hasHalfStar = ratingOutOf5 - fullStars >= 0.5;
  
  return (
    <div className="flex items-center">
      <div className={cn("flex mr-2", className)}>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="fill-warning text-warning"
            size={16}
          />
        ))}
        
        {hasHalfStar && (
          <StarHalf
            className="fill-warning text-warning"
            size={16}
          />
        )}
        
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="text-gray-300"
            size={16}
          />
        ))}
      </div>
      
      {showText && (
        <span className="text-dark font-bold">{ratingOutOf5.toFixed(1)}</span>
      )}
    </div>
  );
}
