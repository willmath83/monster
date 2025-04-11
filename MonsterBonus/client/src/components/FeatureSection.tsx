import { Award, Gift, Shield, Zap, Trophy, Percent } from "lucide-react";

export function FeatureSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-dark mb-4">Why Monster VIP Is Better</h2>
          <p className="text-gray-600 text-lg">We give you access to elite VIP casino experiences with monstrous bonuses and insider advantages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full gradient-bg mx-auto flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">VIP Treatment</h3>
            <p className="text-gray-600">Our members receive exclusive VIP bonuses and priority customer service</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full secondary-gradient mx-auto flex items-center justify-center mb-4">
              <Percent className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Higher Payouts</h3>
            <p className="text-gray-600">Our partner sites offer enhanced odds and better RTP percentages</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full accent-gradient mx-auto flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Maximum Security</h3>
            <p className="text-gray-600">All our recommended casinos use advanced encryption and strict verification</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full gradient-bg mx-auto flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Insider Tips</h3>
            <p className="text-gray-600">Gain access to professional betting strategies and expert predictions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
