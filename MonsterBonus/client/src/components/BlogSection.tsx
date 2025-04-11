import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function BlogSection() {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
    queryFn: async () => {
      const res = await fetch('/api/blog-posts?limit=3');
      if (!res.ok) throw new Error('Failed to fetch blog posts');
      return res.json();
    }
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-32" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Skeleton className="h-5 w-16 mr-2" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                  <Skeleton className="h-7 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !blogPosts) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 p-4 rounded-xl text-red-500 text-center">
            Failed to load blog posts. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-dark">Latest from the Blog</h2>
          <Link href="/blog">
            <a className="text-primary-500 font-bold hover:text-primary-600 flex items-center">
              <span>View All Articles</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
