import { StaticImageData } from "next/image";
import img1 from "@/public/images/form/2.jpg";
import img2 from "@/public/images/form/4.jpg";
import img3 from "@/public/images/form/6.jpg";
interface IRoomsLinks {
  title: string;
  href: string;
}
interface IRoomsCards {
  label: string;
  image: StaticImageData;
  title: string;
  href: string;
}
export const RoomsLinks: IRoomsLinks[] = [
  {
    title: "All Rooms Default",
    href: "/",
  },
  {
    title: "All Rooms Style 2",
    href: "/",
  },
  {
    title: "All Rooms Style 3",
    href: "/",
  },
  {
    title: "Single Room",
    href: "/",
  },
  {
    title: "Single Room Style 2",
    href: "/",
  },
];
export const RoomsCards: IRoomsCards[] = [
  { label: "Best Seller", image: img1, title: "Deluxe Room", href: "/" },
  { label: "Best Seller", image: img2, title: "Family Suite", href: "/" },
  { label: "Featured", image: img3, title: "Presidential Suite", href: "/" },
];
