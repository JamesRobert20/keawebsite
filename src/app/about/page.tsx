import Link from 'next/link';

const milestones = [
    { year: '2020', event: 'Company founded in Dar es Salaam', icon: '🏢' },
    { year: '2021', event: 'Reached 100 partner farmers', icon: '🤝' },
    { year: '2022', event: 'Expanded to beans and rice products', icon: '🌱' },
    { year: '2023', event: '500+ farmers in our network', icon: '👨‍🌾' },
    { year: '2024', event: 'Added cassava and expanded regionally', icon: '🚀' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-6">
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Connecting Farmers
                            <span className="gradient-text block mt-2">to Markets</span>
                        </h1>
                        <p className="text-xl text-stone leading-relaxed">
                            We partner with Tanzanian farmers to supply quality crops directly to grocery chains, 
                            restaurants, and businesses — creating value for everyone in the supply chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center card-glass">
                                        <span className="text-6xl">🌾</span>
                                    </div>
                                    <div className="h-56 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                                        <span className="text-7xl">🌽</span>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-56 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                                        <span className="text-7xl">🫘</span>
                                    </div>
                                    <div className="h-40 bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl flex items-center justify-center">
                                        <span className="text-6xl">🍚</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 card-glass rounded-xl p-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Dar es Salaam</p>
                                        <p className="text-xs text-stone">Tanzania, East Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                                Since 2020
                            </span>
                            <h2 className="text-3xl md:text-4xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Our Journey
                            </h2>
                            <div className="space-y-4 text-stone leading-relaxed">
                                <p>
                                    Kea Company Ltd was founded to solve a real problem: Tanzanian farmers produce 
                                    excellent crops but often lack access to fair markets. Meanwhile, businesses need 
                                    reliable suppliers they can trust.
                                </p>
                                <p>
                                    Starting with maize — Tanzania&apos;s staple crop — we built relationships with farming
                                    communities across the country&apos;s most fertile regions. Fair pricing and quality 
                                    standards quickly earned us trust on both sides.
                                </p>
                                <p>
                                    Today, we supply beans, rice, cassava, and other essential crops, working with 
                                    over 500 farmers and serving businesses throughout East Africa. Our growth 
                                    reflects the success of our farmer partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                            Milestones
                        </span>
                        <h2 className="text-3xl md:text-4xl text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            Our Growth Story
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-light hidden md:block"></div>

                        <div className="space-y-8 md:space-y-0">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="card-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                                            <span className="text-4xl mb-3 block">{milestone.icon}</span>
                                            <p className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                {milestone.year}
                                            </p>
                                            <p className="text-stone">{milestone.event}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-white shadow-md hidden md:block"></div>

                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                            What We Stand For
                        </span>
                        <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Our Mission & Values
                        </h2>
                        <p className="text-lg text-stone max-w-2xl mx-auto">
                            Every decision we make is guided by these core principles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Quality Assurance',
                                description: 'Every crop is tested, sorted, and verified to meet business standards before reaching our customers.',
                                color: 'from-amber-400 to-amber-500',
                            },
                            {
                                icon: '🌍',
                                title: 'Sustainability',
                                description: 'We promote eco-friendly farming practices, helping farmers protect their land for future generations.',
                                color: 'from-green-400 to-green-500',
                            },
                            {
                                icon: '🤝',
                                title: 'Fair Partnership',
                                description: 'Fair prices for farmers mean better livelihoods, which translates to better products for everyone.',
                                color: 'from-primary to-accent',
                            },
                        ].map((value) => (
                            <div key={value.title} className="card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                                    <span className="text-3xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                    {value.title}
                                </h3>
                                <p className="text-stone leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            How We Work
                        </h2>
                        <p className="text-lg text-stone max-w-2xl mx-auto">
                            From farm to your business — a simple, transparent process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Farm Sourcing', description: 'We source crops directly from our network of 500+ Tanzanian farmers.', icon: '🌾' },
                            { step: '02', title: 'Quality Check', description: 'Every batch is tested for quality, moisture, and grading standards.', icon: '✅' },
                            { step: '03', title: 'Processing', description: 'Crops are cleaned, sorted, and packaged to meet your specifications.', icon: '📦' },
                            { step: '04', title: 'Delivery', description: 'Reliable delivery to grocery chains, restaurants, and businesses.', icon: '🚚' },
                        ].map((item, index) => (
                            <div key={item.step} className="text-center relative">
                                {/* Connector line */}
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-accent/20"></div>
                                )}
                                <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl card-glass flex items-center justify-center mb-4">
                                    <span className="text-4xl">{item.icon}</span>
                                </div>
                                <span className="text-sm font-bold gradient-text">{item.step}</span>
                                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                                <p className="text-stone text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary via-primary-light to-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Join businesses across Tanzania who trust Kea Company for their crop supply needs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/products"
                            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            View Our Crops
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
