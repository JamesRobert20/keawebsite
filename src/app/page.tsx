import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialSection from '@/components/TestimonialSection';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <TestimonialSection />

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                                Why Kea Company
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Your Reliable Partner
                                <span className="gradient-text block mt-2">Farm to Business</span>
                            </h2>
                            <p className="text-lg text-stone mb-8 leading-relaxed">
                                We bridge the gap between Tanzanian farmers and businesses. Our direct partnerships 
                                ensure you get quality crops with consistent supply and fair pricing.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Direct Farm Partnerships',
                                        description: 'We work directly with over 500 farmers across Tanzania\'s most fertile regions.'
                                    },
                                    {
                                        title: 'Quality Control',
                                        description: 'Every batch is tested and graded to ensure it meets business standards.'
                                    },
                                    {
                                        title: 'Reliable B2B Supply',
                                        description: 'Consistent supply to grocery chains, restaurants, and food businesses.'
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 card-glass rounded-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm text-stone">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Image Collage */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Main Image */}
                                <div className="col-span-2 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden flex items-center justify-center relative card-glass">
                                    <div className="text-center relative z-10">
                                        <span className="text-7xl">🌾</span>
                                        <p className="text-foreground font-medium mt-2">Tanzanian Agriculture</p>
                                    </div>
                                </div>
                                {/* Side Images */}
                                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-5xl">🌽</span>
                                        <p className="text-foreground font-medium mt-2 text-sm">Quality Maize</p>
                                    </div>
                                </div>
                                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-5xl">🫘</span>
                                        <p className="text-foreground font-medium mt-2 text-sm">Fresh Beans</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 card-glass rounded-xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <span className="text-2xl">🇹🇿</span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>100%</p>
                                        <p className="text-xs text-stone">Tanzanian Sourced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent relative overflow-hidden">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 bg-white rounded-full animate-gentle-pulse"></span>
                        <span className="text-sm font-medium text-white">Ready to Get Started?</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Partner with Kea Company
                        <span className="block mt-2 text-white/90">for Reliable Crop Supply</span>
                    </h2>

                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you need maize for your grocery chain, beans for your restaurant, or bulk crops 
                        for your business — we connect you directly to Tanzanian farmers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            Request a Quote
                            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/products"
                            className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            View Our Crops
                            <svg className="w-5 h-5 ml-2 opacity-60 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>+255 123 456 789</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>info@keacompany.co.tz</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
