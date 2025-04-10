import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-emerald-900 text-white">
            {/* Background layer with maize field pattern */}
            <div
                className="absolute inset-0 bg-opacity-30 overflow-hidden"
                style={{
                    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iNzUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iMjUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')",
                    backgroundSize: "100px 100px",
                }}
            ></div>

            <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-amber-300">Quality Maize</span>{` from Tanzania's Heartland`}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200">
                            Connecting local farmers with markets, delivering freshness from field to table, and supporting sustainable agriculture in Tanzania.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="/products"
                                className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                            >
                                Our Products
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent hover:bg-emerald-700 border-2 border-amber-400 text-amber-400 font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                            <div
                                className="absolute inset-0 bg-amber-500 bg-opacity-20 flex items-center justify-center"
                                style={{
                                    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDIyMCw2MCwwLjQpIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjIwLDYwLDAuNCkiLz48Y2lyY2xlIGN4PSIyNSIgY3k9Ijc1IiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwyMjAsNjAsMC40KSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iMjUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDIyMCw2MCwwLjQpIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjIwLDYwLDAuNCkiLz48L3N2Zz4=')",
                                    backgroundSize: "50px 50px",
                                }}
                            >
                                {/* Replacement for an actual image */}
                                <div className="text-center p-4">
                                    <svg className="w-32 h-32 mx-auto text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                    </svg>
                                    <h3 className="mt-4 text-xl font-bold text-white">Maize from Tanzania</h3>
                                    <p className="mt-2 text-white text-opacity-80">Premium grade, sustainably farmed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-lg bg-emerald-800 bg-opacity-50">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400 text-emerald-900">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                        <p className="text-gray-300">Premium grade maize sourced directly from Tanzanian farmers.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-emerald-800 bg-opacity-50">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400 text-emerald-900">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Support Local Farmers</h3>
                        <p className="text-gray-300">We work directly with farmers to ensure fair prices and sustainable practices.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-emerald-800 bg-opacity-50">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400 text-emerald-900">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                        <p className="text-gray-300">Competitive prices for both farmers and consumers in our supply chain.</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 