import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CasinoTab } from "@/components/CasinoTab";
import { SportsTab } from "@/components/SportsTab";
import { TipsTab } from "@/components/TipsTab";

export function TabSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="casino" className="w-full">
          <TabsList className="w-full flex border-b border-gray-200 mb-8 bg-transparent overflow-x-auto scrollbar-hide h-auto">
            <TabsTrigger
              value="casino"
              className="px-6 py-3 data-[state=active]:border-b-4 data-[state=active]:border-accent-500 data-[state=active]:text-accent-500 data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:bg-transparent font-heading text-lg text-gray-600 hover:text-primary-500 flex-shrink-0 rounded-none"
            >
              Casino
            </TabsTrigger>
            <TabsTrigger
              value="sports"
              className="px-6 py-3 data-[state=active]:border-b-4 data-[state=active]:border-accent-500 data-[state=active]:text-accent-500 data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:bg-transparent font-heading text-lg text-gray-600 hover:text-primary-500 flex-shrink-0 rounded-none"
            >
              Sports
            </TabsTrigger>
            <TabsTrigger
              value="tips"
              className="px-6 py-3 data-[state=active]:border-b-4 data-[state=active]:border-accent-500 data-[state=active]:text-accent-500 data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:bg-transparent font-heading text-lg text-gray-600 hover:text-primary-500 flex-shrink-0 rounded-none"
            >
              Tips
            </TabsTrigger>
            <TabsTrigger
              value="bonuses"
              className="px-6 py-3 data-[state=active]:border-b-4 data-[state=active]:border-accent-500 data-[state=active]:text-accent-500 data-[state=active]:font-bold data-[state=active]:shadow-none data-[state=active]:bg-transparent font-heading text-lg text-gray-600 hover:text-primary-500 flex-shrink-0 rounded-none"
            >
              Bonuses
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="casino" className="m-0">
            <CasinoTab />
          </TabsContent>
          
          <TabsContent value="sports" className="m-0">
            <SportsTab />
          </TabsContent>
          
          <TabsContent value="tips" className="m-0">
            <TipsTab />
          </TabsContent>
          
          <TabsContent value="bonuses" className="m-0">
            <div className="min-h-[400px] flex items-center justify-center">
              <p className="text-gray-500 text-lg">Coming soon! Check back for exclusive bonus offers.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
