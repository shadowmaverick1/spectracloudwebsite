import React, { useEffect } from 'react';
import { Server, Cpu, Shield, Zap, Clock, CreditCard, Users, Cloud, MessageSquare, HardDrive } from 'lucide-react';

// Intersection Observer for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.scroll-animate').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-6');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="scroll-animate card-hover bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function PricingCard({ name, priceInr, priceUsd, specs, features, highlighted = false }: {
  name: string;
  priceInr: string;
  priceUsd: string;
  specs: {
    ram: string;
    cpu: string;
    disk: string;
  };
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`scroll-animate card-hover ${
      highlighted ? 'bg-gradient-to-b from-purple-600/20 to-transparent border-purple-500/50' : 'bg-gray-800/50 border-gray-700'
    } backdrop-blur-sm p-8 rounded-xl border hover:border-purple-500/50 transition-all duration-300`}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="flex flex-col mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">₹{priceInr}</span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
        <div className="text-gray-400 text-sm mt-1">(${priceUsd}/month)</div>
      </div>
      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <Cpu className="w-5 h-5 text-purple-400 mr-2" />
          <span>{specs.ram} RAM</span>
        </div>
        <div className="flex items-center">
          <Zap className="w-5 h-5 text-purple-400 mr-2" />
          <span>{specs.cpu} CPU</span>
        </div>
        <div className="flex items-center">
          <HardDrive className="w-5 h-5 text-purple-400 mr-2" />
          <span>{specs.disk} Disk</span>
        </div>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
            {feature}
          </div>
        ))}
      </div>
      <a 
        href="https://discord.gg/d9TAVEyXVS" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn-press w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          highlighted ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        <MessageSquare className="w-5 h-5" />
        Order on Discord
      </a>
    </div>
  );
}

function VPSPricingCard({ ram, priceInr, priceUsd, description }: { ram: string; priceInr: string; priceUsd: string; description: string }) {
  return (
    <div className="scroll-animate card-hover bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4">{ram} RAM VPS</h3>
      <div className="flex flex-col mb-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">₹{priceInr}</span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
        <div className="text-gray-400 text-sm mt-1">(${priceUsd}/month)</div>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <a 
        href="https://discord.gg/d9TAVEyXVS" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-press w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600"
      >
        <MessageSquare className="w-5 h-5" />
        Order on Discord
      </a>
    </div>
  );
}

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80"
            alt="Server Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        <nav className="absolute top-0 left-0 right-0 z-50 py-6">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">Spectra Cloud</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#vps" className="hover:text-purple-400 transition-colors">VPS Hosting</a>
            </div>
            <a 
              href="https://discord.gg/d9TAVEyXVS"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-press bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Join Discord
            </a>
          </div>
        </nav>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Spectra Cloud
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Premium Minecraft Server Hosting with Unmatched Performance
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://discord.gg/d9TAVEyXVS"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-press bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Join Our Discord
            </a>
            <a 
              href="#pricing" 
              className="btn-press bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Plans
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-animate">Why Choose Spectra Cloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-purple-400" />}
              title="Instant Setup"
              description="Get your server running in less than 60 seconds"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              title="DDoS Protection"
              description="Enterprise-grade protection included free"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-purple-400" />}
              title="24/7 Support"
              description="Expert support team always available"
            />
          </div>
        </div>
      </section>

      {/* Minecraft Hosting Plans Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-animate">Minecraft Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <PricingCard
              name="Starter"
              priceInr="50"
              priceUsd="0.60"
              specs={{
                ram: "2GB",
                cpu: "120%",
                disk: "15GB"
              }}
              features={[
                "Instant Setup",
                "DDoS Protection",
                "24/7 Support"
              ]}
            />
            <PricingCard
              name="Basic"
              priceInr="60"
              priceUsd="0.72"
              specs={{
                ram: "4GB",
                cpu: "140%",
                disk: "30GB"
              }}
              features={[
                "All Starter features",
                "Automated Backups",
                "Plugin Support"
              ]}
            />
            <PricingCard
              name="Advanced"
              priceInr="80"
              priceUsd="0.96"
              specs={{
                ram: "6GB",
                cpu: "150%",
                disk: "40GB"
              }}
              features={[
                "All Basic features",
                "Priority Support",
                "Custom Domain"
              ]}
              highlighted={true}
            />
            <PricingCard
              name="Pro"
              priceInr="100"
              priceUsd="1.20"
              specs={{
                ram: "8GB",
                cpu: "200%",
                disk: "45GB"
              }}
              features={[
                "All Advanced features",
                "Premium Support",
                "Modpack Support"
              ]}
            />
            <PricingCard
              name="Elite"
              priceInr="140"
              priceUsd="1.68"
              specs={{
                ram: "10GB",
                cpu: "225%",
                disk: "50GB"
              }}
              features={[
                "All Pro features",
                "Priority Queue",
                "Advanced Monitoring"
              ]}
            />
            <PricingCard
              name="Ultra"
              priceInr="160"
              priceUsd="1.92"
              specs={{
                ram: "12GB",
                cpu: "250%",
                disk: "60GB"
              }}
              features={[
                "All Elite features",
                "Custom Plugins",
                "Daily Backups"
              ]}
            />
            <PricingCard
              name="Supreme"
              priceInr="180"
              priceUsd="2.16"
              specs={{
                ram: "14GB",
                cpu: "300%",
                disk: "75GB"
              }}
              features={[
                "All Ultra features",
                "Premium Hardware",
                "Dedicated Support"
              ]}
            />
            <PricingCard
              name="Max"
              priceInr="200"
              priceUsd="2.40"
              specs={{
                ram: "16GB",
                cpu: "400%",
                disk: "80GB"
              }}
              features={[
                "All Supreme features",
                "Maximum Performance",
                "Priority Hardware"
              ]}
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="scroll-animate card-hover bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/50">
              <h3 className="text-2xl font-bold mb-4">Custom Plan</h3>
              <p className="text-gray-400 mb-6">Need a specific configuration? We can create a custom plan tailored to your needs.</p>
              <a 
                href="https://discord.gg/d9TAVEyXVS" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-press inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us on Discord
              </a>
            </div>
            <div className="scroll-animate card-hover bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/50">
              <h3 className="text-2xl font-bold mb-4">Infinite Plan</h3>
              <p className="text-gray-400 mb-6">Unlimited resources for the most demanding projects. Contact us for pricing.</p>
              <a 
                href="https://discord.gg/d9TAVEyXVS" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-press inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us on Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section id="vps" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-animate">VPS Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VPSPricingCard
              ram="2GB"
              priceInr="300"
              priceUsd="3.60"
              description="Perfect for small projects, lightweight apps, and testing."
            />
            <VPSPricingCard
              ram="4GB"
              priceInr="600"
              priceUsd="7.20"
              description="Ideal for hosting small websites or moderate game servers."
            />
            <VPSPricingCard
              ram="8GB"
              priceInr="800"
              priceUsd="9.60"
              description="Excellent for multiple apps, websites, or larger game servers."
            />
            <VPSPricingCard
              ram="16GB"
              priceInr="1500"
              priceUsd="18.00"
              description="Great for heavy apps, databases, and advanced gaming."
            />
            <VPSPricingCard
              ram="32GB"
              priceInr="2500"
              priceUsd="30.00"
              description="Optimal for high-traffic sites, virtualization, and intense workloads."
            />
            <VPSPricingCard
              ram="64GB"
              priceInr="3000"
              priceUsd="36.00"
              description="Ultimate power for enterprise apps and big data projects."
            />
          </div>
          <div className="mt-12 text-center">
            <div className="scroll-animate inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-purple-500/50">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-lg">99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold">Spectra Cloud</span>
            </div>
            <p className="text-gray-400">Premium Minecraft hosting solutions for every player.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;