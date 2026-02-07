'use client'

import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Quality Maize",
        emoji: "🌽",
        description: "Cleaned and sorted maize grain. Ideal for milling, ugali preparation, or direct cooking applications.",
        features: ["Grade A Quality", "Low Moisture", "Bulk Available"],
        color: "from-amber-400 to-yellow-500",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
    },
    {
        id: 2,
        name: "Red Kidney Beans",
        emoji: "🫘",
        description: "Protein-rich beans from Tanzania's highlands. Perfect for restaurants and grocery retailers.",
        features: ["High Protein", "Fresh Harvest", "Various Sizes"],
        color: "from-red-500 to-amber-600",
        bgColor: "bg-gradient-to-br from-red-50 to-amber-50",
    },
    {
        id: 3,
        name: "Long Grain Rice",
        emoji: "🍚",
        description: "Aromatic long-grain rice from Tanzania's paddy fields. A staple for everyday meals.",
        features: ["Aromatic", "Non-GMO", "Farm Fresh"],
        color: "from-stone-300 to-amber-200",
        bgColor: "bg-gradient-to-br from-stone-50 to-amber-50",
    },
    {
        id: 4,
        name: "Fresh Cassava",
        emoji: "🥔",
        description: "Quality cassava roots and processed products. Versatile for various culinary uses.",
        features: ["Fresh Daily", "Processed Options", "Bulk Orders"],
        color: "from-amber-300 to-orange-400",
        bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dot-pattern opacity-30"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                        What We Supply
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Tanzanian Crops for
                        <span className="gradient-text"> Your Business</span>
                    </h2>
                    <p className="text-lg text-stone max-w-2xl mx-auto leading-relaxed">
                        We connect you directly to Tanzanian farmers, supplying quality crops 
                        to grocery chains, restaurants, and food businesses.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group card overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Product Visual */}
                                <div className={`${product.bgColor} p-8 flex items-center justify-center md:w-1/3 relative overflow-hidden`}>
                                    <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <span className="text-5xl">{product.emoji}</span>
                                    </div>
                                    {/* Decorative circles */}
                                    <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/50"></div>
                                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/30"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 md:w-2/3">
                                    <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                        {product.name}
                                    </h3>
                                    <p className="text-stone text-sm mb-4 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {product.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 bg-cream rounded-full text-xs font-medium text-primary"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center text-primary font-medium text-sm group/link"
                                    >
                                        Request Quote
                                        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
                    >
                        View All Crops
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '4+', label: 'Crop Varieties', icon: '🌾' },
                        { value: '500+', label: 'Partner Farmers', icon: '👨‍🌾' },
                        { value: '10K+', label: 'Tons Annually', icon: '📦' },
                        { value: '100%', label: 'Tanzanian Sourced', icon: '🇹🇿' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 card-glass rounded-2xl"
                        >
                            <span className="text-3xl mb-3 block">{stat.icon}</span>
                            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                {stat.value}
                            </p>
                            <p className="text-sm text-stone">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
