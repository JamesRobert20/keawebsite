import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Premium Maize Grade A",
        description: "High-quality maize grain, cleaned and sorted for optimal quality. Perfect for milling into flour or direct cooking.",
        price: "Contact for pricing",
        image: "/maize-product-1.jpg", // This is a placeholder, we'll use SVG instead for now
    },
    {
        id: 2,
        name: "White Maize Wholesale",
        description: "Bulk white maize for commercial purposes. Available in large quantities for restaurants, grocers, and mills.",
        price: "Contact for pricing",
        image: "/maize-product-2.jpg", // This is a placeholder, we'll use SVG instead for now
    },
    {
        id: 3,
        name: "Maize Flour",
        description: "Finely milled maize flour ideal for making ugali and other traditional Tanzanian dishes.",
        price: "Contact for pricing",
        image: "/maize-product-3.jpg", // This is a placeholder, we'll use SVG instead for now
    }
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Featured Products</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer premium quality maize products sourced directly from Tanzanian farmers.
                        All our products meet the highest standards of quality and freshness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            {/* Product image (using a colored div with SVG pattern for now) */}
                            <div
                                className="h-56 bg-amber-100 flex items-center justify-center"
                                style={{
                                    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iNDUiIGN5PSIxNSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSJyZ2JhKDIyMCwxNjQsMCwwLjIpIi8+PC9zdmc+')",
                                    backgroundSize: "60px 60px",
                                }}
                            >
                                <svg className="w-20 h-20 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-emerald-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-emerald-800 font-medium">{product.price}</span>
                                    <Link
                                        href="/contact"
                                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded transition duration-300"
                                    >
                                        Inquire
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        View All Products
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
} 