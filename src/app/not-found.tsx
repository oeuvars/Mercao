import Navbar from "@/components/global/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Footer from "./(home)/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className='background h-full'>
        <div className='absolute inset-0 border-r-inherit'>
            <img src='/assets/background-pattern.svg' alt='' className='min-h-screen'/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-20 absolute w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="phone:text-7xl lg:text-[10rem] font-satoshi-bold">
            <span>4</span>
            <span className="gradient-text saturate-150">0</span>
            <span>4</span>
          </h1>
          <h2 className="phone:text-sm tablet:text-lg font-satoshi-regular tracking-tight">Err! You have come to place that you shouldn't have.</h2>
          <Link href="/" className="flex justify-between">
            <Button className="rounded-md mt-5 bg-gradient-to-r from-indigo-200 to-yellow-100 font-satoshi-medium text-[#0b0e0f] mx-auto">Go Back <ArrowRight className="text-[#0b0e0f] size-5"/></Button>
          </Link>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}
