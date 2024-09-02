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
    title: "Kul att veta",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Vedskola",
        path: "/virke",
        newTab: false,
      },
      {
        id: 32,
        title: "Verktygsskola",
        path: "/verktyg",
        newTab: false,
      },
      {
        id: 33,
        title: "Bastuvett & Etikett",
        path: "/bastu",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Kontakta oss",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
