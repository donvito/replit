import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495521939206-a217db9df264"
          alt="Modern office"
          className="object-cover w-full h-full opacity-10"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Master Web Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join the waitlist for our comprehensive web development course.
            Learn modern frameworks and build real-world applications.
          </p>
          <Button
            size="lg"
            className="text-lg"
            onClick={() => {
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
