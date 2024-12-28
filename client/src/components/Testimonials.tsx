import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?w=150&h=150&fit=crop&crop=faces",
    content: "This platform has revolutionized how we work. Can't wait for the full release!",
  },
  {
    name: "David Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?w=150&h=150&fit=crop&crop=faces",
    content: "The features and functionality are exactly what we've been looking for.",
  },
  {
    name: "Emily Williams",
    role: "Team Lead",
    image: "https://images.unsplash.com/photo-1554774853-6a56f62c6451?w=150&h=150&fit=crop&crop=faces",
    content: "Finally, a solution that understands modern workplace needs.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}