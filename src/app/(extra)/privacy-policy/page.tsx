import Footer from "@/app/(home)/Footer";
import Navbar from "@/components/global/navbar";

export default function Component() {
   return (
     <section className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="space-y-6 py-32 w-[80%] mx-auto tracking-tight">
          <div>
            <h1 className="phone:text-5xl tablet:text-6xl lg:text-8xl text-center font-satoshi-bold tracking-tighter tablet:pb-5">
              <span className="gradient-text pr-2 py-1">Privacy Policy</span>
            </h1>
            <p className="mt-4 phone:text-sm tablet:text-lg leading-relaxed text-neutral-200 phone:text-center tablet:text-left">
              At Mercao, we are committed to protecting the privacy and security of your personal information. This
              Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </div>
          <div className="pt-10">
            <h2 className="text-xl font-satoshi-bold">
              <span className="gradient-text pr-2 py-1">Information We Collect</span>
            </h2>
            <p className="mt-4 text-neutral-400">
              We collect the following types of information from you:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-neutral-400">
              <li>
                Personal information, such as your name, email address, and contact details, when you sign up for our
                services or make a purchase.
              </li>
              <li>
                Usage data, including information about how you interact with our website and the devices you use to
                access our services.
              </li>
              <li>Payment information, such as your credit card details, when you make a purchase.</li>
              <li>
                Location data, which we may collect to provide you with location-based services or to comply with legal
                requirements.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-satoshi-bold">
              <span className="gradient-text pr-2 py-1">How We Use Your Information</span>
            </h2>
            <p className="mt-4 text-neutral-400">We use the information we collect to:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-neutral-400">
              <li>Provide and improve our products and services.</li>
              <li>Personalize your experience and tailor our offerings to your needs.</li>
              <li>Communicate with you about your account and our offerings.</li>
              <li>Comply with legal and regulatory requirements.</li>
              <li>Protect our business and prevent fraud or other illegal activities.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold gardient-text">Cookies and Third-Party Services</h2>
            <p className="mt-4 text-neutral-500">
              We use cookies and other tracking technologies to enhance your user experience and to analyze how our
              website is used. We may also use third-party services, such as analytics providers and advertising partners,
              that collect and use your information to improve our services and to serve targeted advertisements.
            </p>
            <p className="mt-4 text-neutral-500">
              You can manage your cookie preferences and opt-out of certain third-party services by adjusting your browser
              settings or visiting the privacy settings in your account.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-satoshi-bold gardient-text">
              <span className="gradient-text pr-2 py-1">Data Sharing and Storage</span>
            </h2>
            <p className="mt-4 text-neutral-500">
              We may share your information with third-party service providers who assist us in operating our business and
              delivering our services to you. We will never sell or rent your personal information to any third party for
              their own marketing purposes without your explicit consent.
            </p>
            <p className="mt-4 text-neutral-500">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. Your
              data is stored securely and in compliance with applicable data protection laws and regulations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-satoshi-bold">
              <span className="gradient-text pr-2 py-1">Contact Us</span>
            </h2>
            <p className="mt-4 text-neutral-500">
              If you have any questions or concerns about our privacy practices, please don't hesitate to contact us at
              <a
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="#"
              >
                &nbsp;anurag@oeuvars.site
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
     </section>
   )
 }

