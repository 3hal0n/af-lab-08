import React from 'react'

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Company</h3>
        <p className="text-slate-500 text-sm">Building the future of web interfaces with speed and precision.</p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Connect</h3>
        <div className="flex gap-4">
          {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
            <a key={social} href={`https:// ${social.toLowerCase()}.com/3hal0n`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
      <div className="text-sm text-slate-500 md:text-right">
        <p>&copy; {new Date().getFullYear()} AF Lab 08. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer
