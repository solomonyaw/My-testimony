
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-900 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-serif-heading text-xl tracking-widest text-pink-500">PROPHETIC DISCOVERY</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-tight text-gray-400">
            <a href="#intro" className="hover:text-white transition-colors">TESTIMONY</a>
            <a href="#hansel" className="hover:text-white transition-colors">HANSEL</a>
            <a href="#fiasco" className="hover:text-white transition-colors">FIASCO</a>
            <a href="#fuller" className="hover:text-white transition-colors">FULLER</a>
            <a href="#conclusion" className="hover:text-white transition-colors">MISSION</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow z-10">
        {children}
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="font-serif-heading text-2xl">Solomon Yaw Adeklo</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "We will not compromise who we are to be accepted by the crowd. We want substance in the place of popularity. We are LASERS."
          </p>
          <div className="pt-8 text-gray-600 text-xs">
            © {new Date().getFullYear()} Solomon Yaw Adeklo Testimony. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
