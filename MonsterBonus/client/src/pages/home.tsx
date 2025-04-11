import { Navbar } from "@/components/Navbar";
import { BannerCarousel } from "@/components/BannerCarousel";
import { TabSection } from "@/components/TabSection";
import { FeatureSection } from "@/components/FeatureSection";
import { BlogSection } from "@/components/BlogSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-6 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">
              Unleash <span className="text-primary-500">Monstrous</span> <span className="text-accent-500">Winnings</span>
            </h1>
            <p className="text-lg text-gray-600">
              Your ultimate guide to the best online casinos & sportsbooks with exclusive VIP bonuses
            </p>
          </div>
          
          <BannerCarousel />
        </div>
      </section>
      
      <TabSection />
      
      <FeatureSection />
      
      <BlogSection />
      
      <NewsletterSection />
      
      <Footer />
    </div>
  );
}
