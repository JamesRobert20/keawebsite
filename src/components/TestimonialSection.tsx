'use client'

import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Maria Kimaro",
        role: "Owner, Mama's Grocery Store",
        text: "The quality of maize from Kea Company Ltd is consistently excellent. My customers appreciate the fresh, premium products and keep coming back for more. Their reliable delivery has helped my business grow.",
        image: "/testimonial-1.jpg" // Placeholder, we'll use an avatar icon
    },
    {
        id: 2,
        name: "John Mbwana",
        role: "Restaurant Manager, Dar Cuisine",
        text: "We've been sourcing our maize from Kea Company Ltd for over a year now. The quality and consistency helps us maintain the high standards our customers expect. Their customer service is also exceptional.",
        image: "/testimonial-2.jpg" // Placeholder, we'll use an avatar icon
    },
    {
        id: 3,
        name: "Grace Mutua",
        role: "Flour Mill Owner",
        text: "As a flour miller, the quality of maize is critical to my business. Kea Company Ltd delivers clean, well-sorted maize that produces excellent flour. Their fair pricing and reliable supply have made them our preferred supplier.",
        image: "/testimonial-3.jpg" // Placeholder, we'll use an avatar icon
    },
];

export default function TestimonialSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-16 bg-emerald-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">What Our Customers Say</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We take pride in our products and the relationships we build with our customers.
                        Here's what they have to say about working with Kea Company Ltd.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial card */}
                    <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                            {/* Testimonial avatar */}
                            <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center text-white text-2xl font-bold">
                                {testimonials[activeTestimonial].name.charAt(0)}
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-emerald-800">
                                    {testimonials[activeTestimonial].name}
                                </h3>
                                <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                            </div>
                        </div>

                        <div className="relative">
                            <svg className="w-12 h-12 text-emerald-100 absolute top-0 left-0 -mt-4 -ml-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            <p className="text-gray-700 italic text-lg relative z-10 px-6">
                                "{testimonials[activeTestimonial].text}"
                            </p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition duration-300 ${index === activeTestimonial ? 'bg-emerald-700' : 'bg-emerald-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 