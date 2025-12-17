import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "HOME", path: "/" },
        { name: "MEET THE TEAM", path: "/team" },
        { name: "SERVICES", path: "/services" },
        { name: "CAREERS", path: "/careers" },
        { name: "CONTACT US", path: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center mr-4">
                    <img
                        src="/assets/logo.png"
                        alt="Borman Marlow"
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-sm font-medium text-foreground hover:text-secondary transition-colors tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                        <Link to="/contact">Get Legal Advice</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-8 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="text-lg font-medium hover:text-secondary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="mt-4">
                                    <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                                        <Link to="/contact">Get Legal Advice</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
