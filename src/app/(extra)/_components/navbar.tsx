import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {Image} from "@nextui-org/image";
import { Button } from "@nextui-org/button";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-neutral-950/60 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/merco.svg" alt="Merco" className="h-10 rounded-none" />
        <h1 className="font-satoshi-bold text-2xl tracking-tight">
          <span className="gradient-text">Mercao</span>
        </h1>
      </Link>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none font-satoshi-medium text-neutral-200">
          <Link href="#">Home</Link>
          <Link href="#">Sponsors</Link>
          <Link href="#">Clients</Link>
          <Link href="#">Product</Link>
          <Link href="#">Pricing</Link>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[#0b0b0b] px-3 py-1 text-sm font-satoshi-medium text-white backdrop-blur-3xl">
               Get Started
            </span>
          </Button>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
