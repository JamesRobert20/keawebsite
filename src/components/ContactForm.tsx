'use client'

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: 'general',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<null | { success: boolean; message: string }>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitResult({
                success: true,
                message: 'Thank you for your message! We will get back to you within 24 hours.',
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                product: 'general',
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitResult(null);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="card-glass rounded-2xl p-8 md:p-10">
            {/* Success/Error Message */}
            {submitResult && (
                <div className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${submitResult.success
                    ? 'bg-green-50 text-green-700 border border-green-100'
                    : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                    {submitResult.success ? (
                        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    )}
                    <span className="font-medium">{submitResult.message}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                            Your Name <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-light group-focus-within:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                            Email Address <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-light group-focus-within:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-foreground">
                            Phone Number
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-light group-focus-within:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
                                placeholder="+255 XXX XXX XXX"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-foreground">
                            Company/Organization
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-light group-focus-within:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
                                placeholder="Enter your company name"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Interest */}
                <div className="group">
                    <label htmlFor="product" className="block mb-2 text-sm font-medium text-foreground">
                        Crop of Interest
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-light group-focus-within:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <select
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full pl-12 pr-10 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                            <option value="general">🌾 General Inquiry</option>
                            <option value="maize">🌽 Maize</option>
                            <option value="beans">🫘 Red Kidney Beans</option>
                            <option value="rice">🍚 Long Grain Rice</option>
                            <option value="cassava">🥔 Fresh Cassava</option>
                            <option value="bulk">📦 Bulk Order (Multiple Crops)</option>
                            <option value="other">✨ Other Products</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-light">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="group">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                        Your Message <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3.5 bg-white rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300 resize-none"
                            placeholder="Tell us about your requirements — quantity needed, delivery location, timeline, etc."
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                        ? 'bg-stone-light cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>

                {/* Privacy Note */}
                <p className="text-center text-xs text-stone-light">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                </p>
            </form>
        </div>
    );
}
