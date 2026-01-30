import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 

  Cpu,
  Zap,

} from 'lucide-react';


function AiAdvisor({ t, isRtl }) {
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




  return (
    <>


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

    </>
  );
}

export default AiAdvisor
