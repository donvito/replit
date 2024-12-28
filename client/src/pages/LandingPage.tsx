import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { RegisterForm } from "../components/RegisterForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
    </div>
  );
}