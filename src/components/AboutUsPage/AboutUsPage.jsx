import React from 'react';
import Banner from '../Banner/Banner';

const pageImage =
    'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const AboutUsPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Banner */}
            <Banner title="About Us" image={pageImage} />

            {/* 1. Our Story Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Images Collage */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=800&auto=format&fit=crop"
                                alt="Fresh Vegetables"
                                className="w-full h-80 sm:h-96 object-cover"
                            />
                        </div>
                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 z-20 bg-orange-500 text-white p-5 sm:p-6 rounded-2xl shadow-xl flex items-center gap-4">
                            <span className="text-4xl font-extrabold">10+</span>
                            <span className="text-sm font-medium leading-tight">
                                Years of <br /> Fresh Experience
                            </span>
                        </div>
                    </div>

                    {/* Right: Story Text */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm">
                            Know About Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                            We Bring Nature's Best Directly To Your{' '}
                            <span className="text-orange-500">Doorstep</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At <strong className="text-gray-900">Grocify</strong>, we believe that everyone deserves access to clean, farm-fresh, and organic food without any hassle. What started as a small local farm market has now grown into a trusted online grocery service delivering thousands of fresh smiles daily.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We directly partner with local organic farmers to ensure that every vegetable, fruit, and daily essential you receive meets the highest standards of freshness and hygiene.
                        </p>

                        {/* Checkpoints */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {[
                                '100% Organic & Handpicked',
                                'Zero Preservatives & Chemicals',
                                'Superfast Same-day Delivery',
                                'Direct Farm-to-Table Model',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3.5 h-3.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="bg-orange-50/60 border-y border-orange-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">50K+</p>
                            <p className="text-gray-600 font-medium text-sm mt-1">Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">1,500+</p>
                            <p className="text-gray-600 font-medium text-sm mt-1">Fresh Products</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">120+</p>
                            <p className="text-gray-600 font-medium text-sm mt-1">Partner Farms</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">99.8%</p>
                            <p className="text-gray-600 font-medium text-sm mt-1">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Features) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
                        Why Choose Grocify
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                        Freshness You Can Taste, Service You Can Trust
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">100% Organic</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We source all items directly from certified organic and sustainable growers.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75m0 3.75h3.75" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Express Delivery</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Get your daily kitchen needs and groceries delivered to your door in under 60 minutes.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Affordable Prices</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Fair market rates without middlemen commissions, saving your wallet every day.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Not satisfied with freshness? Enjoy hassle-free instant refunds and replacements.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Mission & Vision */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <span className="text-xs uppercase font-bold text-orange-500 tracking-wider">
                                Our Purpose
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To simplify the way everyday families shop for food by offering reliable, fresh, and hand-picked groceries delivered straight to their doors with unmatched speed and love.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <span className="text-xs uppercase font-bold text-orange-500 tracking-wider">
                                Our Future
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To build an eco-friendly grocery ecosystem that empowers local farmers, reduces urban food wastage, and promotes healthy living in every single household we serve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Call To Action (Shop Now) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
                    {/* Subtle decorative circle */}
                    <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Ready to taste the real freshness?
                    </h2>
                    <p className="mt-3 text-orange-100 max-w-xl mx-auto text-base sm:text-lg">
                        Join thousands of happy families who trust Grocify for their weekly organic essentials.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/"
                            className="px-8 py-3.5 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            Start Shopping Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;