import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-emerald-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-amber-300 mb-4">Kea Company Ltd</h3>
                        <p className="mb-2">Quality agricultural products from Tanzania.</p>
                        <p className="mb-2">Connecting farmers to market, improving lives.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-amber-300 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-amber-300 transition duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-amber-300 transition duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-amber-300 transition duration-300">
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-300 transition duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-amber-300 mb-4">Contact Us</h3>
                        <p className="mb-2">123 Uhuru Street, Dar es Salaam, Tanzania</p>
                        <p className="mb-2">Phone: +255 123 456 789</p>
                        <p className="mb-2">Email: info@keacompanyltd.com</p>

                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-amber-300 transition duration-300" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.013 3.693 9.153 8.505 9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896 1.411-4.167 3.818-4.167 1.153 0 1.762.085 2.051.124v2.294h-1.642c-1.022 0-1.379.969-1.379 2.061v1.437h2.995l-.406 2.629h-2.588v7.247C18.235 21.236 22 17.062 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-amber-300 transition duration-300" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-amber-300 transition duration-300" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.669.01 2.985.058 4.04.044.975.207 1.504.344 1.856.182.467.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.669 0 2.985-.01 4.04-.058.975-.044 1.504-.207 1.856-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.88.344-1.856.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.044-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.352-.137-.881-.3-1.856-.344-1.055-.048-1.37-.058-4.04-.058z" />
                                    <path d="M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-emerald-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Kea Company Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 