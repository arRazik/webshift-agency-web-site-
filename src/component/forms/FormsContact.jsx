import React, { useState } from 'react'
import { 
  Monitor, Smartphone, Palette, ShoppingBag, Settings,
  ChevronRight, Send, MessageSquare, CheckCircle2,
  Globe, Menu, X, Layout, Cpu, Zap, ShieldCheck, ExternalLink
} from 'lucide-react';

function FormsContact({ t, isRtl }) {

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mbdobodb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const ContactInfo = ({ icon, title, detail }) => (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <p className="text-gray-500">{detail}</p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold mb-6">{t.contactTitle}</h2>
            <p className="text-gray-400 text-xl mb-12">{t.contactSubtitle}</p>

            <div className="space-y-8">
              <ContactInfo icon={<Globe className="text-indigo-500" />} title="WebShift HQ" detail="Morocco" />
              <ContactInfo icon={<Send className="text-indigo-500" />} title="Email Support" detail="contact@webshiftagency.com" />
              <ContactInfo icon={<Smartphone className="text-indigo-500" />} title="Sales Inquiry" detail="+212 633772043" />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl space-y-6"
          >
            <input name="name" placeholder="WebShift" required
              className="w-full bg-black/50 border border-gray-800 rounded-xl p-4 text-white"
            />

            <input name="email" type="email" placeholder="contact@webshiftagency.com" required
              className="w-full bg-black/50 border border-gray-800 rounded-xl p-4 text-white"
            />

            <textarea name="message" required
              placeholder="Let's build something..."
              className="w-full bg-black/50 border border-gray-800 rounded-xl p-4 text-white h-32 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
            >
              {loading ? t.sending || "Sending..." : t.sendBtn}
            </button>

            {/* MESSAGE UNDER FORM */}
            {status === "success" && (
              <p className="text-green-500 flex items-center gap-2 mt-4">
                <CheckCircle2 size={18} />
                {t.successMsg }
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 mt-4">
                {t.errorMsg }
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

export default FormsContact;
