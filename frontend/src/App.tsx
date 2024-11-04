import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
// import BenefitsSection from '@/components/BenefitsSection';
// import Footer from '@/components/Footer';


export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Feature Section */}
            <FeaturesSection />
        </div>
    )
}
