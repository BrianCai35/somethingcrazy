import localFont from "next/font/local";
import { Kumbh_Sans } from "next/font/google";

export const pilowlava = localFont({
  src: [
    {
      path: "../../public/fonts/Pilowlava-Regular.otf",
    },
  ],
  variable: "--font-pilowlava",
  display: "swap",
});

export const strasua = localFont({
  src: [
    {
      path: "../../public/fonts/strasua.otf",
    },
  ],
  variable: "--font-strasua",
  display: "swap",
});

export const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
  display: "swap",
});
