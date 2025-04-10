import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <TestimonialSection />

            {/* Call to action section */}
            <section className="py-16 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Kea Crops?</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto text-emerald-100">
                        We're committed to providing high-quality maize products while supporting local Tanzanian farmers.
                        Get in touch to learn more about our products and partnership opportunities.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </>
    );
}
