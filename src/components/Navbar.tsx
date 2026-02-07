'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
            ? 'glass shadow-lg py-3'
            : 'bg-white/50 backdrop-blur-sm py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled ? 'bg-gradient-to-br from-primary to-accent' : 'bg-gradient-to-br from-primary to-accent'
                        }`}>
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            Kea Company
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-primary">
                            Farm to Market
                        </span>
                    </div>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/about', label: 'About Us' },
                        { href: '/products', label: 'Our Crops' },
                        { href: '/contact', label: 'Contact' },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-stone hover:text-primary hover:bg-cream-dark transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-primary-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Quote
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg text-foreground hover:bg-cream-dark transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="mx-4 mt-2 p-4 rounded-xl glass">
                    <div className="flex flex-col space-y-1">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/about', label: 'About Us' },
                            { href: '/products', label: 'Our Crops' },
                            { href: '/contact', label: 'Contact' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 rounded-lg text-sm font-medium text-stone hover:text-primary hover:bg-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center bg-gradient-to-r from-primary to-primary-dark text-white"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
