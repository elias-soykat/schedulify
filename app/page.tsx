import { redirect } from "next/navigation";
import { CTA } from "./components/landingPage/Cta";
import { Features } from "./components/landingPage/Features";
import Footer from "./components/landingPage/Footer";
import { Hero } from "./components/landingPage/Hero";
import { Logos } from "./components/landingPage/Logos";
import { Navbar } from "./components/landingPage/Navbar";
import { Testimonial } from "./components/landingPage/Testimonial";
import { auth } from "./lib/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
