import Navbar from "@/components/global/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Footer from "./(home)/Footer";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-between">
      <Navbar />
      <div className='background h-full'>
        <div className='absolute inset-0 border-r-inherit'>
            <img src='/assets/background-pattern.svg' alt='' className='min-h-screen'/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-40 z-20 absolute w-full h-screen">
        <div>
          <h1 className="text-[10rem] font-satoshi-bold">
            <span>4</span>
            <span className="gradient-text saturate-150">0</span>
            <span>4</span>
          </h1>
          <h2 className="text-2xl font-satoshi-regular tracking-tight">Oops! I dont think this even exists.</h2>
          <p></p>
          <Link href="/" className="flex justify-between">
            <Button className="rounded-md mt-5 bg-gradient-to-r from-indigo-200 to-yellow-100 font-satoshi-medium text-[#0b0e0f] mx-auto">Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    </section>
  );
}
