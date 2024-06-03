import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";
import { BillingProvider } from "@/providers/billing-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mercao",
  description: "Automate your business with Drag-and-drop tools to turn workflows into streamlined tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body>
          <ModalProvider>
            <BillingProvider>
              <Toaster position="top-right" reverseOrder={false} />
              {children}
            </BillingProvider>
          </ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
