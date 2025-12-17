import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, Home as HomeIcon, Users, Briefcase, FileText, ScrollText, Gavel } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
    const services = [
        {
            title: "Property Law",
            description: "Expert conveyancing and property transfer services.",
            icon: HomeIcon,
        },
        {
            title: "Divorce & Family Law",
            description: "Compassionate legal support for family matters.",
            icon: Users,
        },
        {
            title: "Insolvency & Business Rescue",
            description: "Strategic advice for financial distress and recovery.",
            icon: GraphUp, // Custom or fallback
        },
        {
            title: "Wills & Estates",
            description: "Secure your legacy with professional estate planning.",
            icon: ScrollText,
        },
        {
            title: "General Litigation",
            description: "Representation in High Court and Magistrate's Court.",
            icon: Gavel,
        },
        {
            title: "Antenuptial Contracts",
            description: "Protect your future with a tailored contract.",
            icon: FileText,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center bg-primary overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Bornman Marlow <span className="text-secondary">Incorporated</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Excellence, Integrity, and Proficiency in every legal matter. Your trusted partners in Law.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary border-none text-base font-semibold px-8">
                            <Link to="/contact">Get In Touch</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white text-base font-semibold px-8" asChild>
                            <Link to="/services">Our Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">About Our Firm</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Bornman Marlow Incorporated is a boutique law firm located in Pretoria. We pride ourselves on providing personalized, professional, and efficient legal services to our clients.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                With a focus on building lasting relationships, we understand that every legal matter is unique. Our dedicated team of attorneys is committed to finding the best possible solution for your specific needs, whether it's property transactions, family law, or complex litigation.
                            </p>
                            <Button variant="link" className="text-secondary p-0 h-auto font-semibold text-lg" asChild>
                                <Link to="/team" className="flex items-center">
                                    Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <Scale className="h-32 w-32 text-gray-300" />
                            {/* Placeholder for About Image */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Our Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive legal solutions tailored to your personal and business requirements.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-secondary">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                            <Link to="/services">View All Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Need Legal Assistance?</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                        Contact us today to schedule a consultation with one of our experienced attorneys.
                    </p>
                    <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-10" asChild>
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

// Helper for icon
const GraphUp = (props: any) => (
    <Briefcase {...props} />
)

export default Home;
