import React, { useState } from 'react';
import Banner from '../Banner/Banner';

const contactBannerImage =
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1074&auto=format&fit=crop';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Order Issue',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahan aap apna backend API ya form handler connect kar sakte hain
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white text-gray-800">
            {/* 1. Page Banner */}
            <Banner title="Contact Us" image={contactBannerImage} />

            {/* 2. Top Info Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Call Us */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Call Support</h4>
                        <p className="text-base font-bold text-gray-900 mt-1">+92 300 1234567</p>
                        <p className="text-xs text-gray-500 mt-0.5">Toll free: 111-GROCIFY</p>
                    </div>

                    {/* Card 2: Email Us */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Email Inquiry</h4>
                        <p className="text-base font-bold text-gray-900 mt-1">support@grocify.com</p>
                        <p className="text-xs text-gray-500 mt-0.5">help@grocify.com</p>
                    </div>

                    {/* Card 3: Location */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Central Warehouse</h4>
                        <p className="text-base font-bold text-gray-900 mt-1">Main Commercial Area</p>
                        <p className="text-xs text-gray-500 mt-0.5">Phase 5, DHA, Lahore</p>
                    </div>

                    {/* Card 4: Operating Hours */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Delivery Hours</h4>
                        <p className="text-base font-bold text-gray-900 mt-1">7:00 AM – 11:00 PM</p>
                        <p className="text-xs text-gray-500 mt-0.5">7 Days a Week</p>
                    </div>
                </div>
            </section>

            {/* 3. Form & Contact Details Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Contact Form (7 cols) */}
                    <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
                        <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">
                            Have Questions or Feedback?
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            Fill out the form below and our grocery support team will get back to you within 2 hours.
                        </p>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Ali Ahmed"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Phone Number */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="0300 0000000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all"
                                    />
                                </div>

                                {/* Subject / Category */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                        Inquiry Type
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all bg-white"
                                    >
                                        <option value="Order Status">Track Existing Order</option>
                                        <option value="Quality Concern">Product Quality / Freshness</option>
                                        <option value="Delivery Issue">Delivery Delay or Feedback</option>
                                        <option value="Farmer Partnership">Farm / Vendor Partnership</option>
                                        <option value="General">Other General Questions</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    placeholder="How can we help you today? Please mention your Order ID if applicable..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Right: Quick Assistance & WhatsApp Box (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Live WhatsApp Card */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.781 2.796.782 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.768-5.769-5.768zm0 10.428c-.887 0-1.591-.247-2.303-.67l-.165-.098-1.709.448.457-1.666-.108-.172c-.477-.759-.728-1.5-.728-2.504 0-2.483 2.02-4.502 4.506-4.502 2.484 0 4.505 2.019 4.506 4.502 0 2.485-2.021 4.506-4.507 4.506z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Need Immediate Help?</h3>
                                    <p className="text-xs text-gray-600">Chat with our grocery team on WhatsApp</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Facing issues with an active order or missing an item? Message us directly for real-time resolution!
                            </p>
                            <a
                                href="https://wa.me/923001234567"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Google Map Box */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                            <iframe
                                title="Grocify Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108843.43734493399!2d74.24151745!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23bdf62c1619a9f!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                width="100%"
                                height="240"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="p-4 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                                <span>Direct Hub & Distribution Center</span>
                                <span className="font-semibold text-orange-500">Open 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Quick FAQ Strip */}
            <section className="bg-orange-50/40 border-t border-orange-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Question</h3>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
                        Can I return damaged or non-fresh items instantly?
                    </p>
                    <div className="inline-block bg-white px-6 py-3 rounded-full border border-orange-200 text-sm font-medium text-gray-700 shadow-sm">
                        Yes! Check items at delivery and hand back anything you're unsatisfied with for an instant refund.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;