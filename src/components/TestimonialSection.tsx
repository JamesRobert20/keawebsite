'use client'

import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Maria Kimaro",
        role: "Procurement Manager, FreshMart Supermarkets",
        location: "Dar es Salaam",
        text: "Kea Company has been our go-to supplier for maize and beans. Their diverse crop selection means we source everything from one trusted partner. Delivery is always on time.",
        rating: 5,
        crop: "🌽",
    },
    {
        id: 2,
        name: "John Mbwana",
        role: "Executive Chef, Serengeti Restaurant",
        location: "Arusha",
        text: "As a restaurant, we need consistent quality and variety. Kea delivers both — from rice for our pilau to beans for traditional dishes. Everything arrives fresh.",
        rating: 5,
        crop: "🍚",
    },
    {
        id: 3,
        name: "Grace Mutua",
        role: "Operations Director, Mutua Flour Mill",
        location: "Mbeya",
        text: "The maize quality from Kea is consistently good — low moisture, clean grain, properly sorted. Their farmer network means reliable supply even during peak seasons.",
        rating: 5,
        crop: "🌾",
    },
    {
        id: 4,
        name: "Hassan Omari",
        role: "Buyer, Coastal Food Distributors",
        location: "Zanzibar",
        text: "Working with Kea simplified our supply chain. One company for maize, beans, rice, cassava. Their commitment to farmer partnerships means sustainable sourcing.",
        rating: 5,
        crop: "🫘",
    },
];

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-mesh opacity-50"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 glass text-primary rounded-full text-sm font-medium mb-4">
                        Client Feedback
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Trusted by Businesses
                        <span className="gradient-text block mt-2">Across Tanzania</span>
                    </h2>
                    <p className="text-lg text-stone max-w-2xl mx-auto">
                        See what our partners say about working with Kea Company
                    </p>
                </div>

                {/* Testimonial Display */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Card */}
                        <div className="card-glass rounded-3xl p-8 md:p-12">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Crop Indicator */}
                            <div className="absolute -top-4 right-10">
                                <span className="text-5xl">{testimonials[activeIndex].crop}</span>
                            </div>

                            {/* Content */}
                            <div className="pt-4">
                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                                        {testimonials[activeIndex].name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-foreground font-semibold text-lg">
                                            {testimonials[activeIndex].name}
                                        </p>
                                        <p className="text-stone text-sm">
                                            {testimonials[activeIndex].role}
                                        </p>
                                        <p className="text-primary text-sm flex items-center mt-0.5">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {testimonials[activeIndex].location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8">
                            {/* Dots */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setIsAutoPlaying(false);
                                            setActiveIndex(index);
                                        }}
                                        className={`transition-all duration-300 rounded-full ${index === activeIndex
                                            ? 'w-8 h-2 bg-gradient-to-r from-primary to-accent'
                                            : 'w-2 h-2 bg-stone-light hover:bg-stone'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex space-x-3">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 group hover:bg-white"
                                    aria-label="Previous testimonial"
                                >
                                    <svg className="w-5 h-5 text-stone group-hover:text-primary group-hover:-translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 group hover:bg-white"
                                    aria-label="Next testimonial"
                                >
                                    <svg className="w-5 h-5 text-stone group-hover:text-primary group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
