'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

const crops = [
    { name: 'Maize', emoji: '🌽', color: 'from-amber-400 to-yellow-500' },
    { name: 'Beans', emoji: '🫘', color: 'from-red-400 to-amber-600' },
    { name: 'Rice', emoji: '🍚', color: 'from-stone-200 to-amber-100' },
    { name: 'Cassava', emoji: '🥔', color: 'from-amber-200 to-orange-300' },
];

export default function Hero() {
    const [activeCrop, setActiveCrop] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCrop((prev) => (prev + 1) % crops.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 gradient-mesh"></div>
            
            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl animate-float delay-300"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float delay-500"></div>

            {/* Dot Pattern */}
            <div className="absolute inset-0 dot-pattern opacity-50"></div>

            {/* Content */}
            <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
                            <span className="w-2 h-2 bg-primary rounded-full animate-gentle-pulse"></span>
                            <span className="text-sm font-medium text-primary">Connecting Farmers to Markets</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-in-up delay-100" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="text-foreground">Tanzanian Crops,</span>
                            <span className="block mt-2 gradient-text">Delivered Direct</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-stone mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                            We partner with local farmers to supply quality maize, beans, rice, and cassava 
                            directly to grocery chains, restaurants, and businesses across East Africa.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <Link
                                href="/products"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
                            >
                                View Our Crops
                                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center px-8 py-4 glass text-foreground font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Request Quote
                                <svg className="w-5 h-5 ml-2 opacity-60 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Crop Showcase */}
                    <div className="hidden lg:block animate-fade-in-up delay-400">
                        <div className="relative">
                            {/* Main Showcase Card */}
                            <div className="relative card-glass rounded-3xl p-8">
                                {/* Crop Display */}
                                <div className="text-center">
                                    <div className={`w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br ${crops[activeCrop].color} flex items-center justify-center transition-all duration-500 shadow-2xl`}>
                                        <span className="text-7xl">{crops[activeCrop].emoji}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                        {crops[activeCrop].name}
                                    </h3>
                                    <p className="text-stone">Direct from Tanzanian farms</p>
                                </div>

                                {/* Crop Selector */}
                                <div className="flex justify-center space-x-3 mt-8">
                                    {crops.map((crop, index) => (
                                        <button
                                            key={crop.name}
                                            onClick={() => setActiveCrop(index)}
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${index === activeCrop
                                                ? 'bg-primary/10 scale-110 shadow-lg ring-2 ring-primary/20'
                                                : 'bg-cream hover:bg-cream-dark'
                                                }`}
                                        >
                                            <span className="text-2xl">{crop.emoji}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="absolute -bottom-6 -left-6 card-glass rounded-2xl p-4 animate-float">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <span className="text-xl">🌾</span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>500+</p>
                                        <p className="text-xs text-stone">Partner Farmers</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 card-glass rounded-2xl p-4 animate-float delay-200">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                                        <span className="text-xl">📦</span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>10K+</p>
                                        <p className="text-xs text-stone">Tons Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: '🌱',
                            title: 'Multi-Crop Supply',
                            description: 'Maize, beans, rice, cassava and more — all from one trusted supplier.'
                        },
                        {
                            icon: '🤝',
                            title: 'Farm Partnerships',
                            description: 'Direct relationships with 500+ Tanzanian farmers for reliable supply.'
                        },
                        {
                            icon: '✅',
                            title: 'Quality Assured',
                            description: 'Rigorous quality control ensures only the best reaches your business.'
                        },
                        {
                            icon: '🚚',
                            title: 'B2B Delivery',
                            description: 'Reliable supply to grocery chains, restaurants, and businesses.'
                        },
                    ].map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`group card-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-stone text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    );
}
