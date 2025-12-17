import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Property Law & Conveyancing",
            description: "Our property law department handles all aspects of property transactions.",
            details: ["Residential Transfers", "Commercial Property Transactions", "Sectional Title Schemes", "Mortgage Bond Registrations", "Property Develompment"],
        },
        {
            title: "Divorce & Family Law",
            description: "We provide sensitive and professional assistance in family matters.",
            details: ["Divorce Litigation", "Maintenance Claims", "Custody and Access", "Protection Orders", "Family Mediation"],
        },
        {
            title: "Insolvency & Business Rescue",
            description: "Expert advice on insolvency law and business rescue proceedings.",
            details: ["Liquidation Applications", "Sequestration", "Rehabilitation", "Business Rescue Proceedings", "Debt Review"],
        },
        {
            title: "Wills & Estates",
            description: "Planning for the future and administration of deceased estates.",
            details: ["Drafting of Wills", "Living Trusts", "Deceased Estate Administration", "Curatorships"],
        },
        {
            title: "General Litigation",
            description: "Robust representation in all South African courts.",
            details: ["High Court Litigation", "Magistrate's Court Litigation", "Commercial Litigation", "Contractual Disputes", "Debt Collection"],
        },
        {
            title: "Antenuptial Contracts",
            description: "Drafting and registration of antenuptial contracts.",
            details: ["With Accrual", "Without Accrual", "Post-nuptial Registration", "Notarial Services"],
        },
    ];

    return (
        <div className="min-h-screen py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dedicated to providing professional legal solutions across a wide spectrum of law.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col h-full border hover:border-secondary transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <ul className="space-y-2">
                                    {service.details.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
