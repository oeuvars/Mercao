import { Image } from '@nextui-org/image';
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { FacebookIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white w-full mt-auto relative overflow-hidden">
      <img src='/assets/footer.webp' alt='' className='w-full h-full absolute blur-[2px] object-cover'/>
      <div className="mx-auto px-4 phone:grid tablet:flex justify-between pt-16 phone:w-[90%] tablet:w-[80%]">
        <div className=''>
          <Link href="/" className="flex items-center gap-2 phone:justify-center tablet:justify-start">
            <Image src="/merco.svg" alt="Merco" className="h-10 rounded-none" />
            <h1 className="font-satoshi-bold text-2xl tracking-tight">
              <span className="gradient-text">Mercao</span>
            </h1>
          </Link>
          <p className="mt-2 max-w-xs mb-4 phone:text-sm tablet:text-base text-[#9B9CA1] font-satoshi-medium tracking-tight phone:text-center tablet:text-left">
            Visualize workflows, automate tasks with Drag-and-drop tools to turn workflows into streamlined tasks.
          </p>
          <div className="mt-4 flex space-x-2 phone:justify-center tablet:justify-start">
            <Link href="#" className="icon-cover rounded-md"><InstagramLogoIcon className='w-7 h-7 my-auto'/></Link>
            <Link href="#" className="icon-cover rounded-md"><TwitterLogoIcon className='w-7 h-7 my-auto'/></Link>
            <Link href="#" className="icon-cover rounded-md"><GitHubLogoIcon className='w-7 h-7 my-auto'/></Link>
          </div>
        </div>
        <div className='phone:mt-7 tablet:mt-0'>
          <h3 className="text-lg font-satoshi-bold">
            <span className='gradient-text'>Menu</span>
          </h3>
          <div className="mt-2 space-y-2 flex flex-col">
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Home</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">About</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Features</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Pricing</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Testimonials</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Contact</Link>
          </div>
        </div>
        <div className='phone:mt-7 tablet:mt-0'>
          <h3 className="text-lg font-satoshi-bold">
            <span className='gradient-text'>Utility Pages</span>
          </h3>
          <div className="mt-2 space-y-2 flex flex-col">
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Login</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Register</Link>
            <Link href="/404" className="text-neutral-400/80 hover:text-neutral-300 animation font-satoshi-medium z-20">404</Link>
            <Link href="/privacy-policy" className="text-neutral-400/80 hover:text-neutral-300 animation font-satoshi-medium z-20">Privacy policy</Link>
            <Link href="#" className="text-neutral-400/80 font-satoshi-medium">Terms of services</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center border-t border-neutral-800 py-2 text-neutral-600 font-satoshi-medium">
        <p>Copyright ©2024 Oeuvars</p>
      </div>
    </footer>
  );
}

export default Footer;
