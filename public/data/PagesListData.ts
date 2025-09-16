interface IPagesLinks {
  title: string;
  href: string;
  hr: boolean;
}
export const PagesLinks: IPagesLinks[] = [
  { title: "About Us", href: "/", hr: true },
  { title: "Facilities", href: "/", hr: true },
  { title: "Offers", href: "/", hr: true },
  { title: "Gallery", href: "/", hr: true },
  { title: "Gallery Carousel", href: "/", hr: false },
];
