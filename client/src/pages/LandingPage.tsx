import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { RegisterForm } from "../components/RegisterForm";
import { Testimonials } from "../components/Testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}