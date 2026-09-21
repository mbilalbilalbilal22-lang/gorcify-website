import React from 'react';
import Banner from '../Banner/Banner';

const processBannerImage =
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1170&auto=format&fit=crop';

const ProcessPage = () => {
    // Step-by-step ordering process
    const steps = [
        {
            stepNumber: '01',
            title: 'Select Your Groceries',
            desc: 'Browse hundreds of farm-fresh fruits, vegetables, dairy, and household essentials and add them to your cart.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
            ),
        },
        {
            stepNumber: '02',
            title: 'Direct Farm Harvest',
            desc: 'Once your order is placed, our local partner farmers pick the freshest seasonal produce specifically for you.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918"
                />
            ),
        },
        {
            stepNumber: '03',
            title: 'Eco-Friendly Packing',
            desc: 'Every item passes rigorous 3-layer hygiene tests before being packed in recyclable, temperature-safe packaging.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
            ),
        },
        {
            stepNumber: '04',
            title: 'Superfast Delivery',
            desc: 'Our delivery partners bring your orders safely to your doorstep within minutes or your preferred time slot.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75m0 3.75h3.75"
                />
            ),
        },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* Banner */}
            <Banner title="Our Process" image={processBannerImage} />

            {/* 1. Header Intro */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
                <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                    Simple & Transparent
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                    How <span className="text-orange-500">Grocify</span> Delivers Freshness
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                    From the farm fields to your kitchen table, discover the seamless journey your food takes to guarantee 100% organic freshness.
                </p>
            </section>

            {/* 2. Step by Step Flow */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group flex flex-col justify-between"
                        >
                            {/* Step Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl font-black text-orange-200 group-hover:text-orange-500 transition-colors duration-300">
                                    {item.stepNumber}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                    >
                                        {item.icon}
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-orange-500">
                                <span>Step {idx + 1} of 4</span>
                                <span className="block w-2 h-2 rounded-full bg-orange-400"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Farm to Fork Quality Assurance Section */}
            <section className="bg-orange-50/50 py-16 lg:py-20 border-y border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <span className="px-3.5 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                                Quality First
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                Our 3-Stage Strict Quality Check
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We never store vegetables in cold chemical warehouses for weeks. Our produce moves from local fields straight to our sorting center within hours of being picked.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100/60">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Farm Inspection</h4>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            Soil testing, zero-pesticide verification, and handpicked harvesting.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100/60">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Ozone Washed & Sanitized</h4>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            Cleaned with natural water filtration to remove impurities and bacteria.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100/60">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Temperature Controlled Transit</h4>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            Delivered in insulated freshness-lock bags to keep crispness intact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
                                alt="Fresh salad vegetables quality check"
                                className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">100% Certified Organic</p>
                                    <p className="text-xs text-gray-500">Inspected by Food Safety Standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Easy Return / Guarantee Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 text-center max-w-3xl mx-auto">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">What if an item is not fresh?</h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                        Our "No Questions Asked" policy means if you find any item unsatisfactory at delivery time, hand it back to the rider for an instant wallet refund or replacement!
                    </p>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Order Freshness Delivered In Minutes
                    </h2>
                    <p className="mt-3 text-orange-100 max-w-xl mx-auto text-sm sm:text-base">
                        Skip the supermarket lines. Get handpicked vegetables and fruits directly to your door today.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/"
                            className="px-8 py-3.5 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            Order Groceries Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProcessPage;