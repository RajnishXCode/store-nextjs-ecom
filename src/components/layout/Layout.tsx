import React from 'react'
import Navbar from './Navbar';
import Footer from './footer';


interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated background gradient - subtle design element */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[140%] h-[140%] bg-gradient-radial from-primary-100/30 to-transparent opacity-30"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[140%] h-[140%] bg-gradient-radial from-secondary-100/20 to-transparent opacity-20"></div>
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-gradient-radial from-accent-100/20 to-transparent opacity-20"></div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#6366f2] text-white shadow-btn hover:shadow-btn-hover hover:-translate-y-1 transition-all duration-300 opacity-90 hover:opacity-100"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* Main Layout */}
      <Navbar />
        <div>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout