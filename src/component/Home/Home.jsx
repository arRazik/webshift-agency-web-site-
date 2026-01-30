import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import logo from '../../../public/logo22.png';
import FormsContact from '../forms/FormsContact';

function Home({ t, isRtl }) {
    const [aiInput, setAiInput] = useState("");
    const [aiLoading, setAiLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState("");
  const handleAiConsult = async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    const result = await analyzeProject(aiInput, lang);
    setAiResponse(result || "");
    setAiLoading(false);
  };

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



  return (
    <>
    <section className="relative pt-32  md:pt-48 md:pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-indigo-500/30 text-indigo-400 text-sm font-semibold mb-6">
           <img src={logo} className='w-6' alt="" />
            <span>WebShift Agency </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-display">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={i > 3 ? 'gradient-text' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-xl font-bold text-gray-400 mb-10 leading-relaxed max-w-2xl">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-600/20 group"
            >
              {t.heroCTA}
              <ChevronRight
                className={`w-5 h-5 transition-transform ${
                  isRtl
                    ? 'rotate-180 group-hover:-translate-x-1'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </Link>

            <Link
              to="/AIAdvisor"
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all border-white/20"
            >
              <Cpu className="w-5 h-5" />
              {t.heroConsultant}
            </Link>
          </div>
        </div>
      </div>
    </section>
          {/* Work Process */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-20 text-center font-display">{t.processTitle}</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {t.processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-xl shadow-indigo-600/20">
                  {i + 1}
                </div>
                {i < t.processSteps.length - 1 && (
                  <div className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-indigo-600/50 to-transparent -z-10 ${isRtl ? 'scale-x-[-1]' : ''}`}></div>
                )}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* AI Consultant Tool */}
      <section id="ai-consultant" className="py-24 bg-indigo-900/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass p-8 md:p-12 rounded-[2rem] border-indigo-500/20 text-center">
            <Cpu className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{t.aiAdvisorTitle}</h2>
            <p className="text-gray-400 mb-10">{t.aiAdvisorPlaceholder}</p>
            
            <div className="relative mb-8">
              <textarea 
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder={t.aiAdvisorPlaceholder}
                className="w-full h-40 bg-black/40 border border-gray-800 rounded-2xl p-6 text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none"
              />
              <button 
                onClick={handleAiConsult}
                disabled={aiLoading}
                className="absolute bottom-4 right-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2"
              >
                {aiLoading ? "Thinking..." : t.aiAdvisorAction}
                {!aiLoading && <Zap className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-gray-400 mb-10">{t.aiNotFound}</p>

            {aiResponse && (
              <div className="mt-8 text-left bg-black/50 p-8 rounded-2xl border border-indigo-500/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-indigo-400 font-bold mb-4 uppercase tracking-widest text-sm">WebShift AI Analysis</h4>
                <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
                  {aiResponse}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
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

      <FormsContact t={t} />


    </>
  );
}

export default Home;