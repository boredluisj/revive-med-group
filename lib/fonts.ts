import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const playfairDisplay = localFont({
  src: "../public/fonts/PlayfairDisplay-Variable.ttf",
  weight: "400 900",
  variable: "--font-playfair",
  display: "swap",
});

export const cormorantGaramond = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});
