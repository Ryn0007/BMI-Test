import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
                console.error("Submission failed:", result);
            }
        } catch (error) {
            setStatus("error");
            console.error("Submission error:", error);
        }
    };

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
                        <p className="text-gray-600">
                            We are here to help. Reach out to us for any legal inquiries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm overflow-hidden">
                        {/* Contact Info */}
                        <div className="bg-primary p-10 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <MapPin className="h-6 w-6 text-secondary mr-4 shrink-0" />
                                        <span className="text-gray-200">
                                            1002 Brooklyn Forum Building,<br />
                                            379 Veale Street,<br />
                                            Nieu Muckleneuk,<br />
                                            Pretoria, 0001
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <Phone className="h-6 w-6 text-secondary mr-4 shrink-0" />
                                        <span className="text-gray-200">+27 (12) 054 5285</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Mail className="h-6 w-6 text-secondary mr-4 shrink-0" />
                                        <span className="text-gray-200">admin@bornmanmarlow.co.za</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Clock className="h-6 w-6 text-secondary mr-4 shrink-0" />
                                        <span className="text-gray-200">Mon - Fri: 8:00 AM - 5:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12">
                                {/* Embed map or similar could go here */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-10">
                            <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" placeholder="+27..." value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        className="min-h-[120px]"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </Button>
                                {status === "success" && (
                                    <p className="text-green-600 text-center text-sm">Message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-500 text-center text-sm">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
