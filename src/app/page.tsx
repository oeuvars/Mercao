import Navbar from "@/components/global/navbar";
import Hero from "./(home)/hero";
import Pricing from "./(home)/pricing";
import Footer from "../components/global/footer";
import Solution from "./(home)/solution";
import Testimonials from "./(home)/testimonials";

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
