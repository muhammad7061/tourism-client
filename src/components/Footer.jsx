import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a1120] text-gray-400 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand/Logo */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8 text-emerald-600"
                            >
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-lg md:text-xl font-bold text-white">
                                East Africa Tours
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Discover the beauty of East Africa with our curated tours and experiences.
                        </p>
                    </div>

                    {/* Column 2: Destinations */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Destinations</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Somalia</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Kenya</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Ethiopia</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Tanzania</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Browse Tours</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">My Bookings</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Login</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="mailto:info@eastafricatours.com" className="hover:text-emerald-400 transition-colors">
                                    info@eastafricatours.com
                                </a>
                            </li>
                            <li className="tracking-wider">+254 700 000 000</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center text-xs">
                    <p>© {currentYear} East Africa Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;