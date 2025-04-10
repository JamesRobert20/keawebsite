'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-emerald-800 text-white py-4 px-6 md:px-10 fixed w-full z-100">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-amber-300">Kea Crops</span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-amber-300 transition duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-amber-300 transition duration-300">
                        About Us
                    </Link>
                    <Link href="/products" className="hover:text-amber-300 transition duration-300">
                        Our Products
                    </Link>
                    <Link href="/contact" className="hover:text-amber-300 transition duration-300">
                        Contact
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-emerald-700 px-6 py-4 rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-amber-300 transition duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-amber-300 transition duration-300">
                            About Us
                        </Link>
                        <Link href="/products" className="hover:text-amber-300 transition duration-300">
                            Our Products
                        </Link>
                        <Link href="/contact" className="hover:text-amber-300 transition duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
} 