import React from 'react';
import { MdLocationPin, MdOutlineMail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col  pt-[300px]">


            {/* Main Content */}
            <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
                {/* Get In Touch */}
                <section className="mb-10">
                    <h1 className="text-3xl font-bold text-center mb-2">Get In Touch</h1>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                        Leave, review and all contact questions and requests. Experts answer under open order data and discount, ask extended sum options.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                            <span className="text-teal-500 text-3xl mb-2"><MdLocationPin /></span>
                            <h3 className="font-semibold">102 Street 2714 Donovan</h3>
                            <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet dolore</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                            <span className="text-teal-500 text-3xl mb-2"><FiPhoneCall /></span>
                            <h3 className="font-semibold">+02 1234 567 89</h3>
                            <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet dolore</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                            <span className="text-teal-500 text-3xl mb-2"><MdOutlineMail /></span>
                            <h3 className="font-semibold">info@basket.com</h3>
                            <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet dolore</p>
                        </div>
                    </div>
                </section>

                {/* Send Us Form */}
                <section className="mb-12 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
                        <h2 className="text-2xl font-bold mb-2 text-center">Send Us</h2>
                        <p className="text-center text-gray-600 mb-6 text-sm">
                            Contact us for all your questions and opinions, or you can solve your problem in a shorter time with our contact offices.
                        </p>
                        <form className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                            />
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 h-24 resize-none"
                                name="message"
                                placeholder="Your message"
                                required
                            ></textarea>
                            <button
                                className="w-1/2 bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition duration-200 block mx-auto"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Newsletter */}
            <section className="bg-teal-600 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between mb-12 max-w-5xl mx-auto w-full">
                <div className="text-white text-lg font-semibold mb-4 md:mb-0">Join our newsletter and get...</div>
                <form className="flex w-full md:w-auto gap-2">
                    <input
                        type="email"
                        className="p-2 rounded-l-md border-none focus:outline-none w-full md:w-64"
                        placeholder="Your email address"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-white text-teal-600 px-4 py-2 rounded-r-md font-semibold hover:bg-gray-100"
                    >
                        Subscribe
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t pt-8 pb-4 px-4 mt-auto">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 mb-6">
                    <div>
                        <h4 className="font-bold mb-2">Fruit & Vegetables</h4>
                        <ul>
                            <li>Fresh Vegetables</li>
                            <li>Fresh Fruits</li>
                            <li>Herbs & Seasonings</li>
                            <li>Exotic Fruits</li>
                            <li>Packaged Produce</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Breakfast & Dairy</h4>
                        <ul>
                            <li>Fresh Salad & Dips</li>
                            <li>Milk & Dairy</li>
                            <li>Meat & Seafood</li>
                            <li>Breakfast & Cereal</li>
                            <li>Bakery</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Hot Categories</h4>
                        <ul>
                            <li>Organic Food</li>
                            <li>Gluten Free</li>
                            <li>Snacks</li>
                            <li>Beverages</li>
                            <li>Frozen Food</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Business</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs text-gray-400">
                    &copy; 2024 Basket. All rights reserved.
                </div>
            </footer>
        </div>
    );
} 