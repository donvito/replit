import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const courses = [
  {
    title: "AI to Build Apps",
    price: 49,
    features: [
      "Cursor AI overview",
      "bott.new features",
      "Windsurf capabilities",
      "Replit Agent introduction"
    ],
    description: "Overview of all AI app builders tools including Cursor AI, bott.new, Windsurf, and Replit Agent."
  },
  {
    title: "Mastering Cursor AI",
    price: 99,
    features: [
      "Cursor AI setup",
      "Code generation techniques",
      "AI-assisted debugging",
      "Advanced Cursor AI workflows"
    ],
    description: "Deep dive into Cursor AI, exploring its features and best practices for efficient development."
  },
  {
    title: "Building AI-Enabled Apps",
    price: 99,
    features: [
      "API basics",
      "OpenAI API integration",
      "Google AI API usage",
      "Custom AI model deployment"
    ],
    description: "Learn to create applications with AI capabilities by understanding and integrating various APIs."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader className="pb-8">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${course.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}