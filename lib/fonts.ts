import localFont from "next/font/local";

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

export const inter = localFont({
  src: "../public/fonts/InterVariable.ttf",
  weight: "100 900",
  variable: "--font-avenir",
  display: "swap",
});
