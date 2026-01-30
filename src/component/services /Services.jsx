import React from 'react'
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  ShoppingBag, 
  Settings, 
  ChevronRight, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Globe, 
  Menu, 
  X,
  Layout,
  Cpu,
  Zap,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

function Services({ t, isRtl }) {

  // Sub-components
const ServiceCard = ({ icon, title, desc, features }) => (
  <div className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group flex flex-col h-full">
    <div className="mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>

    <h3 className="text-2xl font-bold mb-4 font-display">
      {title}
    </h3>

    <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
      {desc}
    </p>

    <div className="space-y-2 mt-auto">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
          {f}
        </div>
      ))}
    </div>
  </div>
);

  // Sub-components
const ServiceCardse = ({ icon, title, desc, features }) => (
  <div className="glass p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group flex flex-col h-full">


    <h3 className="text-2xl font-bold mb-4 font-display">
      {title}
    </h3>

    <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
      {desc}
    </p>


  </div>
);
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">{t.servicetitel }</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.servicedesc}
          </p>
        </div>
 




      </div>
                  {/* Services Section */}
      <section id="services" className="py-24 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 font-display">{t.servicesTitle}</h2>
            <p className="text-gray-400 text-lg">{t.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Monitor className="w-8 h-8 text-blue-400" />}
              title={t.serviceWebTitle}
              desc={t.serviceWebDesc}
              features={[ "React", "Node.js", "express.js", "WordPress", "SEO Ready"]}
            />
            <ServiceCard 
              icon={<Smartphone className="w-8 h-8 text-purple-400" />}
              title={t.serviceAppTitle}
              desc={t.serviceAppDesc}
              features={["iOS & Android", "React Native", "Firebase", "Offline First"]}
            />
            <ServiceCard 
              icon={<Palette className="w-8 h-8 text-pink-400" />}
              title={t.serviceUIUXTitle}
              desc={t.serviceUIUXDesc}
              features={["Prototyping",  "User Testing", "Design Systems"]}
            />
            <ServiceCard 
              icon={<ShoppingBag className="w-8 h-8 text-orange-400" />}
              title={t.serviceEcommerceTitle}
              desc={t.serviceEcommerceDesc}
              features={["Shopify", "WooCommerce",  ]}
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-green-400" />}
              title={t.serviceMaintenanceTitle}
              desc={t.serviceMaintenanceDesc}
              features={["24/7 Security", "Hosting", "Cloud Migration", "Optimization"]}
            />
             <ServiceCard 
              icon={<Layout className="w-8 h-8 text-indigo-400" />}
              title="Solutions Sur Mesure"
              desc="Logiciels métiers adaptés à vos flux de travail spécifiques."
              features={["CRM/ERP", "Automation", "Dashboard", "API Integration"]}
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Services
