import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="block mb-4">
                            {/* Using white logo if available, or text if not. Assuming just text or reuse logo with filter */}
                            <h2 className="text-2xl font-bold tracking-tight text-white">Bornman Marlow Inc.</h2>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Bornman Marlow Incorporated is a boutique law firm based in Pretoria, specializing in property law, litigation, and commercial services.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Meet The Team</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Pages */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/paia-manual" className="text-gray-300 hover:text-white transition-colors">PAIA Manual</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 shrink-0" />
                                <span className="text-gray-300">
                                    1002 Brooklyn Forum Building,<br />
                                    379 Veale Street,<br />
                                    Nieu Muckleneuk, Pretoria, 0001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-secondary mr-3 shrink-0" />
                                <a href="tel:+27120545285" className="text-gray-300 hover:text-white transition-colors">
                                    +27 (12) 054 5285
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-secondary mr-3 shrink-0" />
                                <a href="mailto:admin@bornmanmarlow.co.za" className="text-gray-300 hover:text-white transition-colors">
                                    admin@bornmanmarlow.co.za
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bornman Marlow Inc. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <span className="mr-4">Attorneys • Notaries • Conveyancers</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
