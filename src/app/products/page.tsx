import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Quality Maize Grade A",
        emoji: "🌽",
        description: "High-quality maize grain, meticulously cleaned and sorted. Perfect for milling into flour, making ugali, or direct cooking applications.",
        details: [
            "Source: Selected farms across Tanzania's Southern Highlands & Mbeya region",
            "Quality: Grade A, moisture content below 13%",
            "Packaging: Available in 10kg, 25kg, 50kg, and bulk quantities",
            "Best for: Flour mills, food processors, restaurants, retailers"
        ],
        color: "from-amber-400 to-yellow-500",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
        category: "grain",
    },
    {
        id: 2,
        name: "White Maize Wholesale",
        emoji: "🌾",
        description: "Bulk white maize for commercial operations. Consistent quality, cleaned and ready for your processing needs.",
        details: [
            "Source: Network of farms across Tanzania's key agricultural regions",
            "Quality: Commercial grade, sorted and cleaned",
            "Packaging: Bulk quantities available (minimum 500kg)",
            "Best for: Large-scale food processing, industrial use"
        ],
        color: "from-amber-300 to-amber-400",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
        category: "grain",
    },
    {
        id: 3,
        name: "Red Kidney Beans",
        emoji: "🫘",
        description: "Protein-rich red kidney beans from Tanzania's highlands. Ideal for restaurants, grocery retailers, and food manufacturers.",
        details: [
            "Source: Arusha and Kilimanjaro regions",
            "Quality: Hand-sorted, uniform size, low moisture",
            "Packaging: Available in 5kg, 10kg, 25kg, and bulk",
            "Best for: Restaurants, supermarkets, food manufacturers"
        ],
        color: "from-red-500 to-red-600",
        bgColor: "bg-gradient-to-br from-red-50 to-amber-50",
        category: "legume",
    },
    {
        id: 4,
        name: "Mixed Beans Variety",
        emoji: "🫛",
        description: "A diverse selection of locally grown beans including black-eyed peas, butter beans, and more. Perfect for retailers.",
        details: [
            "Source: Various regions across Tanzania",
            "Quality: Graded and sorted by type",
            "Packaging: Mixed or single-variety bags available",
            "Best for: Retailers, markets, food service"
        ],
        color: "from-amber-600 to-orange-500",
        bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
        category: "legume",
    },
    {
        id: 5,
        name: "Long Grain Rice",
        emoji: "🍚",
        description: "Aromatic long-grain rice from Tanzania's fertile paddy fields. Perfect for everyday meals and special occasions.",
        details: [
            "Source: Mbeya and Morogoro rice paddies",
            "Quality: Aromatic, non-GMO, polished white rice",
            "Packaging: Available in 2kg, 5kg, 10kg, 25kg bags",
            "Best for: Households, restaurants, hospitality industry"
        ],
        color: "from-stone-200 to-stone-300",
        bgColor: "bg-gradient-to-br from-stone-50 to-amber-50",
        category: "grain",
    },
    {
        id: 6,
        name: "Fresh Cassava",
        emoji: "🥔",
        description: "Quality cassava roots from local farms. A versatile staple for various culinary applications, from chips to flour.",
        details: [
            "Source: Coastal and central Tanzania farms",
            "Quality: Fresh harvest, cleaned and inspected",
            "Packaging: Fresh roots or processed (flour, chips)",
            "Best for: Food processors, markets, restaurants"
        ],
        color: "from-amber-200 to-orange-300",
        bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
        category: "root",
    },
    {
        id: 7,
        name: "Maize Flour (Sembe)",
        emoji: "🥣",
        description: "Finely milled maize flour for authentic ugali and traditional Tanzanian dishes. Made from quality Tanzanian maize.",
        details: [
            "Source: Made from quality Tanzanian maize",
            "Quality: Fine texture, fresh, preservative-free",
            "Packaging: Available in 2kg, 5kg, 10kg bags",
            "Best for: Households, restaurants, caterers"
        ],
        color: "from-yellow-300 to-amber-400",
        bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
        category: "processed",
    },
    {
        id: 8,
        name: "Animal Feed Maize",
        emoji: "🐔",
        description: "Quality maize for animal feed production. Consistent quality meeting nutritional requirements for poultry and livestock.",
        details: [
            "Source: Selected farms across Tanzania",
            "Quality: Feed grade, consistent nutritional profile",
            "Packaging: Bulk quantities (minimum 250kg)",
            "Best for: Poultry farms, dairy farms, feed manufacturers"
        ],
        color: "from-amber-500 to-yellow-600",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
        category: "feed",
    }
];

const categories = [
    { id: 'all', name: 'All Products', emoji: '🌾' },
    { id: 'grain', name: 'Grains', emoji: '🌽' },
    { id: 'legume', name: 'Legumes', emoji: '🫘' },
    { id: 'root', name: 'Root Crops', emoji: '🥔' },
    { id: 'processed', name: 'Processed', emoji: '🥣' },
    { id: 'feed', name: 'Animal Feed', emoji: '🐔' },
];

export default function ProductsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-6">
                            Our Products
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Tanzanian Crops
                            <span className="gradient-text block mt-2">For Your Business</span>
                        </h1>
                        <p className="text-xl text-stone leading-relaxed">
                            Quality maize, beans, rice, cassava, and more — all sourced directly from
                            Tanzanian farmers and delivered to your business.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 flex flex-wrap gap-6">
                        {[
                            { value: '8+', label: 'Products' },
                            { value: '4', label: 'Categories' },
                            { value: '100%', label: 'Tanzanian' },
                        ].map((stat) => (
                            <div key={stat.label} className="card-glass rounded-xl px-6 py-4">
                                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                <p className="text-sm text-stone">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white sticky top-16 z-40 border-b border-cream-dark">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className="px-5 py-2.5 rounded-xl glass hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white text-stone font-medium text-sm transition-all duration-300 flex items-center space-x-2"
                            >
                                <span>{category.emoji}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Product Visual */}
                                    <div className={`${product.bgColor} p-8 flex items-center justify-center md:w-2/5 relative overflow-hidden`}>
                                        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                            <span className="text-6xl">{product.emoji}</span>
                                        </div>
                                        {/* Decorative */}
                                        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/50"></div>
                                        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/30"></div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-6 md:w-3/5">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                                                {product.name}
                                            </h3>
                                            <span className="px-2 py-1 glass text-primary text-xs font-medium rounded-lg capitalize">
                                                {product.category}
                                            </span>
                                        </div>
                                        <p className="text-stone text-sm mb-4 leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Details List */}
                                        <ul className="space-y-2 mb-5">
                                            {product.details.slice(0, 3).map((detail, idx) => (
                                                <li key={idx} className="flex items-start text-sm">
                                                    <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-stone">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300 group/btn"
                                        >
                                            Request Quote
                                            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                            Quality Promise
                        </span>
                        <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Our Quality Standards
                        </h2>
                        <p className="text-lg text-stone max-w-2xl mx-auto">
                            Every crop we deliver meets strict quality standards for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🔍',
                                title: 'Rigorous Selection',
                                description: 'Each batch is carefully selected from trusted farmers who meet our quality criteria.',
                            },
                            {
                                icon: '📋',
                                title: 'Testing & Grading',
                                description: 'Products undergo testing for moisture, contaminants, and grading standards.',
                            },
                            {
                                icon: '📦',
                                title: 'Proper Packaging',
                                description: 'Quality packaging that preserves freshness and protects products during transit.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center p-8 card-glass rounded-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                                    <span className="text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-stone">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="bg-gradient-to-r from-primary via-primary-light to-accent rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                    Coming Soon
                                </span>
                                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                    Expanding Our Range
                                </h2>
                                <p className="text-white/80 mb-6">
                                    We&apos;re constantly working to bring you more variety. New crops and products are being added.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    Get Notified
                                </Link>
                            </div>
                            <div className="flex justify-center space-x-4">
                                {['🥜', '🌻', '☕'].map((emoji, index) => (
                                    <div
                                        key={index}
                                        className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <span className="text-5xl">{emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary via-primary-light to-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Ready to Order?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Contact us for custom quotes, bulk pricing, and delivery options tailored to your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        Request a Quote
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
