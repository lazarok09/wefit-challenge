import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import StyledLayout from "./lib/styled";
import ReduxProviderRegistry from "./StoreProvider";

const OpenSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeFit - Ecommerce",
  description:
    "Venha participar da melhor empresa da américa latina, com grandes clientes como Azul, somos referência na inovação e layouts maravilhosos.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProviderRegistry>
      <html lang="en">
        <body className={OpenSans.className}>
          <StyledLayout>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StyledLayout>
        </body>
      </html>
    </ReduxProviderRegistry>
  );
}
