import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Project-Based Learning",
    description: "Build real applications using modern web frameworks",
    icon: Building2,
  },
  {
    title: "Expert Mentorship",
    description: "Get guidance from experienced industry professionals",
    icon: Users,
  },
  {
    title: "Career Support",
    description: "Interview preparation and job placement assistance",
    icon: Shield,
  },
  {
    title: "Live Sessions",
    description: "Interactive weekly sessions and code reviews",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
