import Navbar from "@/components/global/navbar";
import Hero from "./(home)/Hero";
import Brands from "./(home)/Brands";
import Pricing from "./(home)/Pricing";
import Footer from "./(home)/Footer";
import Solution from "./(home)/Solution";
import Testimonials from "./(home)/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen !bg-[#030303]">
      <Navbar />
      <Hero />
      <Solution />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
