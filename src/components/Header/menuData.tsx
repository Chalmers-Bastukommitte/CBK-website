import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Startsida",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Om oss",
    path: "/about",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Sittande",
        path: "/sittande",
        newTab: false,
      },
      {
        id: 22,
        title: "Utbrända",
        path: "/utbranda",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Vad vi gör",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Tidslinje",
        path: "/Tidslinje",
        newTab: false,
      },
      {
        id: 32,
        title: "Senaste projekt",
        path: "/Projekt",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Kul att veta",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Vedskola",
        path: "/Vedskola",
        newTab: false,
      },
      {
        id: 42,
        title: "Verktygsskola",
        path: "/Verktygsskola",
        newTab: false,
      },
      {
        id: 43,
        title: "Bastuvett & Etikett",
        path: "/Bastuskola",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Kontakta oss",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
