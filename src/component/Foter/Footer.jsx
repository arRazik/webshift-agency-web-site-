import React from 'react'
import { Zap } from 'lucide-react';

function Footer({ t }) {
  return (
      <footer className="py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-indigo-600 w-6 h-6" fill="currentColor" />
            <span className="text-xl font-extrabold tracking-tight font-display">WebShift<span className="text-indigo-500">.</span></span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WebShift Agency. {t.footerRights}
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/razik-abdelilah-9b13b929a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/webshift_agency?igsh=MXZiMGpuOGN3a2VvNQ%3D%3D&utm_source=qr" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
