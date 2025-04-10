import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <>
            {/* Hero section */}
            <section className="pt-24 pb-16 bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-lg max-w-3xl mx-auto text-emerald-100">
                            {`Get in touch with our team for inquiries, quotes, or information about our products.
                            We're here to help you with all your agricultural needs.`}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact info and form section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Contact information */}
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Get In Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-800 mb-1">Address</h3>
                                        <p className="text-gray-700">
                                            123 Uhuru Street<br />
                                            Dar es Salaam<br />
                                            Tanzania
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-800 mb-1">Phone</h3>
                                        <p className="text-gray-700">
                                            +255 123 456 789<br />
                                            +255 987 654 321
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-800 mb-1">Email</h3>
                                        <p className="text-gray-700">
                                            info@keacompanyltd.com<br />
                                            sales@keacompanyltd.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-800 mb-1">Business Hours</h3>
                                        <p className="text-gray-700">
                                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                                            Saturday: 9:00 AM - 1:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social media */}
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-emerald-800 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white hover:bg-emerald-800 transition duration-300" aria-label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.013 3.693 9.153 8.505 9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896 1.411-4.167 3.818-4.167 1.153 0 1.762.085 2.051.124v2.294h-1.642c-1.022 0-1.379.969-1.379 2.061v1.437h2.995l-.406 2.629h-2.588v7.247C18.235 21.236 22 17.062 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white hover:bg-emerald-800 transition duration-300" aria-label="Twitter">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white hover:bg-emerald-800 transition duration-300" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.669.01 2.985.058 4.04.044.975.207 1.504.344 1.856.182.467.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.669 0 2.985-.01 4.04-.058.975-.044 1.504-.207 1.856-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.88.344-1.856.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.044-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.352-.137-.881-.3-1.856-.344-1.055-.048-1.37-.058-4.04-.058z" />
                                            <path d="M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white hover:bg-emerald-800 transition duration-300" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Find Us</h2>
                        <p className="text-gray-700">Visit our office in Dar es Salaam, Tanzania</p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[400px] flex items-center justify-center">
                        {/* Map placeholder - in a real app, this would be a Google Maps embed or similar */}
                        <div className="text-center">
                            <svg className="w-24 h-24 mx-auto text-emerald-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="mt-4 text-lg font-medium text-emerald-800">
                                123 Uhuru Street, Dar es Salaam, Tanzania
                            </p>
                            <p className="text-gray-500 mt-2">
                                Map placeholder - actual map would be implemented here
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 