import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tip } from "@shared/schema";
import { format } from "date-fns";

type TipCardProps = {
  tip: Tip;
};

export function TipCard({ tip }: TipCardProps) {
  const getOutcomeBadge = (outcome: string) => {
    switch (outcome.toLowerCase()) {
      case 'win':
        return (
          <Badge className="bg-success text-white">
            WIN
          </Badge>
        );
      case 'lose':
        return (
          <Badge className="bg-error text-white">
            LOSE
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-warning text-white">
            PENDING
          </Badge>
        );
      default:
        return null;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case 'casino':
        return (
          <Badge variant="outline" className="border-primary-500 text-primary-500">
            Casino
          </Badge>
        );
      case 'sports':
        return (
          <Badge variant="outline" className="border-secondary-500 text-secondary-500">
            Sports
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="bg-white hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-dark mb-2">{tip.title}</h3>
          {getOutcomeBadge(tip.outcome)}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            {format(new Date(tip.createdAt), 'MMM d, yyyy')}
          </div>
          {getCategoryBadge(tip.category)}
        </div>
        
        <p className="text-gray-600 text-sm">{tip.content}</p>
      </CardContent>
    </Card>
  );
}
