export interface IMainMenuButton {
  title: string;
  isList: boolean;
  href: string;
}
export const arrMainMenuButtonData: IMainMenuButton[] = [
  {
    title: "Home",
    isList: false,
    href: "/",
  },
  {
    title: "Rooms",
    isList: true,
    href: "/",
  },
  {
    title: "Reservation",
    isList: false,
    href: "/",
  },
  {
    title: "Pages",
    isList: true,
    href: "/",
  },
  {
    title: "News",
    isList: false,
    href: "/",
  },
  {
    title: "Contact",
    isList: false,
    href: "/",
  },
];
