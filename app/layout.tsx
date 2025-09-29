import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { TradeButton } from "@/components/trade-button";
import Image from "next/image";
import { Providers } from "./providers";

const satoshi = localFont({
  src: "../public/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_DASHBOARD_URL
    ? new URL(process.env.NEXT_PUBLIC_DASHBOARD_URL)
    : undefined,
  openGraph: {
    title: "dYdX Buyback Tracker: Powered by the Community",
  },
  twitter: {
    card: "summary_large_image",
    title: "dYdX Buyback Tracker: Powered by the Community",
  },
  title: "dYdX Buyback Tracker: Powered by the Community",
  description:
    "A transparent view into the DYDX Buyback Program. Monitor protocol revenue, monthly Buybacks, staking metrics, and the broader dYdX ecosystem, all in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased dark`}>
        <Providers>
          <Navbar />
          <main className="px-5 xl:px-10 2xl:container">{children}</main>
          <footer className="px-5 xl:px-10 2xl:container pt-20 pb-5">
            <div className="flex justify-between mb-10">
              <a href="https://www.dydx.xyz/" target="_blank" rel="noreferrer">
                <Image
                  alt="dYdX logo"
                  src="/logo.svg"
                  width={100}
                  height={32}
                />
              </a>

              <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-end">
                <ul className="flex gap-4 items-center">
                  <li>
                    <a
                      href="https://github.com/dydxprotocol"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Github"
                        src="/github.svg"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/dydx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Discord"
                        src="/discord.svg"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/dydxprotocol/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Reddit"
                        src="/reddit.svg"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/dYdX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image alt="X" src="/x.svg" width={24} height={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@dYdXprotocol"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Youtube"
                        src="/youtube.svg"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                  <li className="ml-auto lg:ml-4">
                    <TradeButton />
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-justify leading-normal text-muted-foreground text-xs">
              The content made available on this website is provided for general 
              informational purposes only. The buyback program referenced herein 
              is launched and managed exclusively by the Treasury SubDAO, which 
              is an independent third party unaffiliated with dYdX Operations 
              subDAO (“DOS”), dYdX Foundation, dYdX Trading Inc., or any other 
              dYdX-affiliated entity (collectively, the “dYdX Entities”). This 
              website is operated by DOS solely for the purpose of displaying 
              information and does not itself initiate, operate, or manage the 
              buyback program. The content on this website does not constitute, 
              and should not be considered or relied upon as, financial advice, 
              legal advice, tax advice, investment advice, or advice of any other 
              nature. Reference to any specific program, strategy, product, 
              service, or entity does not constitute an endorsement or 
              recommendation by DOS or any dYdX Entity. Use of any strategies, 
              techniques, products, or services, or engagement with any entities 
              referenced in this website, may involve material risks, including 
              but not limited to financial loss, volatility, operational risk, 
              or non-consensual liquidation of digital assets.  You agree that 
              you are solely responsible for conducting independent research, 
              performing due diligence, and consulting with professional 
              advisors before taking any financial, tax, legal, or investment 
              action in connection with the content of this website. The content 
              of the website is not, and shall not be construed as, an offer, 
              solicitation, or call to action to purchase, sell, or invest in 
              any financial or crypto-asset or related service. Neither DOS nor 
              any of the dYdX Entities makes any representation, assurance, or 
              guarantee as to the accuracy, completeness, timeliness, 
              suitability, or validity of any information provided on this 
              website or linked third-party resources. By accessing the website 
              and taking any action in connection with the information displayed, 
              you agree that DOS and the dYdX Entities shall not be liable, 
              directly or indirectly, for any errors, omissions, or delays in 
              such information, or for any damage, injury, or loss incurred as 
              a result of your use of, or reliance on, such content.
              <br />
              Please note that dYdX Chain services and products are not available 
              to persons or entities who reside in, are located in, are 
              incorporated in, or have registered offices in the United States, 
              Canada, or any other restricted jurisdiction, in accordance with 
              the applicable <a href="https://dydx.trade/terms" target="_blank" rel="noreferrer">
              Terms of Use
              </a>.
            </p>

            <div className="flex justify-end">
              <a
                href="https://www.nabla.studio/"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 text-sm font-bold flex items-center gap-1"
              >
                <span className="opacity-50">proudly made by</span>
                <Image
                  src="/nabla_logo.svg"
                  alt="nabla"
                  className="w-auto h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  width={443}
                  height={81}
                />
              </a>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
