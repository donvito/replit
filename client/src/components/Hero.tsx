import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary"></div>
            <span className="font-bold text-lg">DonvitoCodes Learn</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Courses</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">Sign In</Button>
            <Button className="text-sm">Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="relative min-h-[80vh] bg-gradient-to-b from-background to-background/80 pt-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="relative container mx-auto px-4 py-32">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <div className="flex items-center gap-2 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Joined by <span className="font-medium text-foreground">5,000+</span> students
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Ship faster with AI
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Join thousands of developers using AI to build better software, faster than ever before.
            </p>

            <div className="flex items-center gap-4 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />
              <Button size="lg" className="h-12 px-8">
                Join Waitlist
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20" />
                <span className="text-sm text-muted-foreground">
                  Exclusive AI development resources
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20" />
                <span className="text-sm text-muted-foreground">
                  Priority access to beta features
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}