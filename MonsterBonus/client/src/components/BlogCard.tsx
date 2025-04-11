import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";
import { format } from "date-fns";
import { Link } from "wouter";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const getCategoryClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'casino':
        return 'bg-primary-100 text-primary-500';
      case 'sports':
        return 'bg-secondary-100 text-secondary-500';
      case 'guide':
      default:
        return 'bg-accent-100 text-accent-500';
    }
  };

  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <img 
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge variant="outline" className={`${getCategoryClass(post.category)} border-0 text-xs font-bold px-2 py-1 rounded mr-2`}>
            {post.category}
          </Badge>
          <span className="text-gray-500 text-sm">
            {format(new Date(post.createdAt), 'MMMM d, yyyy')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-dark mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <Link href={`/blog/${post.slug}`}>
          <a className="text-primary-500 font-bold hover:text-primary-600 flex items-center">
            <span>Read More</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
