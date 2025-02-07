import Navbar from "@/components/global/navbar";
import Hero from "./(base)/hero";
import Pricing from "./(base)/pricing";
import Footer from "../components/global/footer";
import Solution from "./(base)/solution";
import Testimonials from "./(base)/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Solution />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
