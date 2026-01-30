import React from 'react';
import { ShieldCheck, Zap, Layout } from 'lucide-react';

function About({ t, isRtl }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">{t.navAbout }</span>
          </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="">{t.propostaitle}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.propostadesc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-4"> {t.projectsproposTitle3} </h3>
            <p className="text-gray-400">
                {t.projectsproposdisc3}
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
              <Layout className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t.projectsproposTitle2}</h3>
            <p className="text-gray-400">
             {t.projectsproposdisc2}
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t.projectsproposTitle1}</h3>
            <p className="text-gray-400">
             {t.projectsproposdisc1}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;