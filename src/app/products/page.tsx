import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Premium Maize Grade A",
        description: "High-quality maize grain, cleaned and sorted for optimal quality. Perfect for milling into flour or direct cooking.",
        details: [
            "Source: Selected farms across Tanzania's Southern Highlands",
            "Quality: Premium grade, low moisture content",
            "Packaging: Available in 10kg, 25kg, and 50kg bags",
            "Best for: Milling, cooking, and commercial use"
        ],
        price: "Contact for pricing",
        image: "/maize-product-1.jpg", // Placeholder
    },
    {
        id: 2,
        name: "White Maize Wholesale",
        description: "Bulk white maize for commercial purposes. Available in large quantities for restaurants, grocers, and mills.",
        details: [
            "Source: Network of farms in Tanzania's key agricultural regions",
            "Quality: Standard grade, sorted and cleaned",
            "Packaging: Bulk quantities available (minimum 500kg)",
            "Best for: Food processing, restaurants, and retail distribution"
        ],
        price: "Contact for pricing",
        image: "/maize-product-2.jpg", // Placeholder
    },
    {
        id: 3,
        name: "Maize Flour",
        description: "Finely milled maize flour ideal for making ugali and other traditional Tanzanian dishes.",
        details: [
            "Source: Made from our premium grade maize",
            "Quality: Fine texture, preservative-free",
            "Packaging: Available in 2kg, 5kg and 10kg bags",
            "Best for: Ugali, porridge, and baking"
        ],
        price: "Contact for pricing",
        image: "/maize-product-3.jpg", // Placeholder
    },
    {
        id: 4,
        name: "Animal Feed Maize",
        description: "Quality maize suitable for animal feed production, meeting nutritional requirements for livestock.",
        details: [
            "Source: Selected farms across Tanzania",
            "Quality: Feed grade, consistent quality",
            "Packaging: Available in bulk (minimum 250kg)",
            "Best for: Poultry farms, dairy farms, and feed manufacturers"
        ],
        price: "Contact for pricing",
        image: "/maize-product-4.jpg", // Placeholder
    }
];

export default function ProductsPage() {
    return (
        <>
            {/* Hero section */}
            <section className="pt-24 pb-16 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
                        <p className="text-lg max-w-3xl mx-auto text-emerald-100">
                            Quality maize products sourced directly from Tanzanian farmers.
                            All our products meet stringent quality standards and are ethically sourced.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    {/* Product image (using a colored div with SVG pattern for now) */}
                                    <div
                                        className="h-full min-h-[200px] bg-amber-100 flex items-center justify-center"
                                        style={{
                                            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iNDUiIGN5PSIxNSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PC9zdmc+')",
                                            backgroundSize: "60px 60px",
                                        }}
                                    >
                                        <svg className="w-16 h-16 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    {/* Product details */}
                                    <div className="p-6 md:col-span-2">
                                        <h3 className="text-xl font-bold text-emerald-800 mb-2">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>

                                        <ul className="mb-6 space-y-2">
                                            {product.details.map((detail, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap justify-between items-center">
                                            <span className="text-emerald-800 font-medium mb-4 md:mb-0">{product.price}</span>
                                            <Link
                                                href="/contact"
                                                className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-6 rounded transition duration-300"
                                            >
                                                Request Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Future products note */}
                    <div className="mt-16 bg-emerald-50 rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Future Product Offerings</h2>
                        <p className="text-gray-700 mb-6">
                            At Kea Crops, we're constantly expanding our range of products to meet the needs of our customers
                            and support more local farmers. In the coming months, we'll be adding:
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-bold text-emerald-700">Rice</h3>
                                    <p className="text-gray-700">Sourced from Tanzania's most fertile rice-growing regions.</p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-bold text-emerald-700">Beans</h3>
                                    <p className="text-gray-700">Various types of locally grown beans, high in protein and nutrition.</p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-bold text-emerald-700">Cassava</h3>
                                    <p className="text-gray-700">Fresh cassava and processed cassava products from local farms.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <p className="text-gray-700">
                                Interested in being notified when we launch new products? Contact us to join our mailing list.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality assurance section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Quality Assurance</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                            Every product we offer undergoes strict quality control measures to ensure you receive only the best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-emerald-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">Rigorous Selection</h3>
                            <p className="text-gray-700 text-center">
                                Each batch of maize is carefully selected from trusted farmers who meet our strict quality standards.
                            </p>
                        </div>

                        <div className="bg-emerald-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">Thorough Testing</h3>
                            <p className="text-gray-700 text-center">
                                Our products undergo testing for moisture content, contaminants, and quality to ensure they meet food safety standards.
                            </p>
                        </div>

                        <div className="bg-emerald-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">Fair Pricing</h3>
                            <p className="text-gray-700 text-center">
                                We offer competitive prices that are fair to both our farmers and customers, creating sustainable value for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-12 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Order?</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto text-emerald-100">
                        Contact us today to discuss your requirements and get a custom quote.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Request a Quote
                    </Link>
                </div>
            </section>
        </>
    );
} 