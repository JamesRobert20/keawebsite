import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
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
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Let&apos;s Discuss Your
                            <span className="gradient-text block mt-2">Crop Requirements</span>
                        </h1>
                        <p className="text-xl text-stone leading-relaxed">
                            Whether you need bulk maize, beans for your restaurant, or a variety of crops 
                            for your grocery chain — our team is ready to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Contact Information
                            </h2>
                            <p className="text-stone mb-8 leading-relaxed">
                                Reach out through any of these channels. We typically respond within 24 hours.
                            </p>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl glass group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-accent/10 flex items-center justify-center mr-4 transition-all">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                                        <p className="text-stone text-sm">
                                            123 Uhuru Street<br />
                                            Dar es Salaam<br />
                                            Tanzania
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl glass group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-accent/10 flex items-center justify-center mr-4 transition-all">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <p className="text-stone text-sm">
                                            +255 123 456 789<br />
                                            +255 987 654 321
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl glass group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-accent/10 flex items-center justify-center mr-4 transition-all">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <p className="text-stone text-sm">
                                            info@keacompany.co.tz<br />
                                            sales@keacompany.co.tz
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-xl glass group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-accent/10 flex items-center justify-center mr-4 transition-all">
                                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                                        <p className="text-stone text-sm">
                                            Mon - Fri: 8:00 AM - 5:00 PM<br />
                                            Saturday: 9:00 AM - 1:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                                <div className="flex space-x-3">
                                    {[
                                        { label: 'Facebook', icon: 'M12 2C6.477 2 2 6.477 2 12c0 5.013 3.693 9.153 8.505 9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896 1.411-4.167 3.818-4.167 1.153 0 1.762.085 2.051.124v2.294h-1.642c-1.022 0-1.379.969-1.379 2.061v1.437h2.995l-.406 2.629h-2.588v7.247C18.235 21.236 22 17.062 22 12c0-5.523-4.477-10-10-10z' },
                                        { label: 'Twitter', icon: 'M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z' },
                                        { label: 'Instagram', icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
                                        { label: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href="#"
                                            className="w-10 h-10 rounded-xl glass hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white text-stone flex items-center justify-center transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="mt-8 p-6 card-glass rounded-2xl">
                                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/products"
                                        className="flex items-center text-stone hover:text-primary transition-colors group"
                                    >
                                        <span className="mr-3">🌽</span>
                                        <span>View Our Products</span>
                                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="flex items-center text-stone hover:text-primary transition-colors group"
                                    >
                                        <span className="mr-3">📖</span>
                                        <span>About Kea Company</span>
                                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Find Us
                        </h2>
                        <p className="text-stone">Visit our office in Dar es Salaam, Tanzania</p>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden card-glass">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                                    <span className="text-5xl">📍</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    Kea Company Ltd
                                </h3>
                                <p className="text-stone mb-4">
                                    123 Uhuru Street, Dar es Salaam, Tanzania
                                </p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    Open in Google Maps
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                            FAQ
                        </span>
                        <h2 className="text-3xl text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            Common Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: 'What is your minimum order quantity?',
                                answer: 'Minimum orders vary by product. For most crops, we accommodate orders starting from 100kg for retailers and 500kg for wholesale. Contact us for specific requirements.'
                            },
                            {
                                question: 'Do you deliver across Tanzania?',
                                answer: 'Yes! We deliver to all major cities and regions across Tanzania. We also serve neighboring East African countries. Delivery terms depend on quantity and destination.'
                            },
                            {
                                question: 'How do you ensure quality?',
                                answer: 'Every batch undergoes quality checks including moisture testing, grading, and inspection for contaminants. We only source from trusted farmers who meet our standards.'
                            },
                            {
                                question: 'Can I get samples before ordering?',
                                answer: 'Absolutely! We encourage potential partners to request samples. Contact us to arrange sample delivery for evaluation before placing bulk orders.'
                            },
                        ].map((faq, index) => (
                            <div key={index} className="card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="font-semibold text-foreground mb-2 flex items-start">
                                    <span className="gradient-text mr-3">Q:</span>
                                    {faq.question}
                                </h3>
                                <p className="text-stone text-sm leading-relaxed pl-6">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
