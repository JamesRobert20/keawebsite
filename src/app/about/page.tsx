import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            {/* Hero section */}
            <section className="pt-24 pb-16 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kea Company Ltd</h1>
                        <p className="text-lg max-w-3xl mx-auto text-emerald-100">
                            Connecting Tanzanian farmers to markets, delivering premium
                            agricultural products, and promoting sustainable farming practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our story section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image placeholder */}
                        <div className="bg-emerald-100 rounded-lg p-8 aspect-square flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-24 h-24 mx-auto text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="mt-4 text-emerald-800 font-semibold">Dar es Salaam, Tanzania</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Founded in 2020, Kea Company Ltd started with a simple mission: to connect local Tanzanian farmers with urban markets and provide high-quality agricultural products to consumers.
                                </p>
                                <p>
                                    We recognized the challenges faced by small-scale farmers in accessing fair markets and the growing demand for quality local produce in urban areas. By bridging this gap, we create value for both farmers and consumers.
                                </p>
                                <p>
                                    {`Starting with maize, Tanzania's staple crop, we've built strong relationships with farming communities across the country's most fertile regions. Our commitment to quality, sustainability, and community development guides everything we do.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and values */}
            <section className="py-16 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Mission & Values</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {`We're committed to sustainable agriculture and supporting local communities.`}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-3 text-center">Quality</h3>
                            <p className="text-gray-700 text-center">
                                We uphold the highest standards in all our products, ensuring they meet local and international quality benchmarks.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-3 text-center">Sustainability</h3>
                            <p className="text-gray-700 text-center">
                                We promote environmentally friendly farming practices and help farmers implement sustainable methods.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-3 text-center">Community</h3>
                            <p className="text-gray-700 text-center">
                                We invest in farmer training, fair compensation, and community development projects in the regions where we operate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Team</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Meet the dedicated professionals working to connect Tanzanian farmers with markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team member cards */}
                        {[
                            { name: 'John Makame', role: 'Founder & CEO', bio: 'With over 10 years in agriculture and business development, John founded Kea Company Ltd to support local farmers and promote sustainable agriculture in Tanzania.' },
                            { name: 'Sarah Mwangi', role: 'Operations Director', bio: 'Sarah oversees our supply chain and ensures quality control, bringing her expertise in logistics and agricultural operations to our team.' },
                            { name: 'Michael Olomi', role: 'Farmer Relations', bio: 'Michael works directly with our network of farmers, providing training, support, and ensuring fair and transparent business relationships.' },
                        ].map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                                <div className="h-48 bg-emerald-200 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-emerald-700 flex items-center justify-center text-white text-3xl font-bold">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-800">{member.name}</h3>
                                    <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-700">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-12 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Work with Us</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto text-emerald-100">
                        Interested in partnering with Kea Company Ltd or learning more about our products and services?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
} 