import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
    const team = [
        {
            name: "Werner Bornman",
            role: "Director",
            image: "/assets/team/werner.png",
            initials: "WB",
        },
        {
            name: "Ilse Marlow",
            role: "Director",
            image: "/assets/team/ilse.png",
            initials: "IM",
        },
        {
            name: "Susan Esterhuizen",
            role: "Senior Associate",
            image: "/assets/team/susan.jpg", // Verified name from website extraction
            initials: "SE",
        },
        // Add more placeholders if needed
    ];

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our experienced team of legal professionals is dedicated to your success.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center border-none shadow-md overflow-hidden group">
                            <div className="aspect-square bg-gray-200 relative overflow-hidden">
                                {/* Image placeholder or Avatar */}
                                <Avatar className="w-full h-full rounded-none">
                                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                                    <AvatarFallback className="text-4xl font-bold bg-gray-300 text-gray-500 w-full h-full flex items-center justify-center rounded-none">
                                        {member.initials}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                                <p className="text-secondary font-medium">{member.role}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Specializing in property law and commercial litigation.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
