import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Vedskola",
    paragraph:
      "Lär dig mer om trätyper, hur de bäst huggs och eldas.",
    image: "/images/blog/blog-01.jpg",
    tags: ["Rufus vedskola"],
  },
  {
    id: 2,
    title: "Verktygsskola",
    paragraph:
      "Lär dig mer om verktyg för vedhuggning och annat kul.",
    image: "/images/blog/blog-02.jpg",
    tags: ["Rufus verktygsskola"],
  },
  {
    id: 3,
    title: "Bastuskola",
    paragraph:
      "Att basta rätt är inte alltid lätt, därför har vi samlat lite regler, kultur och tips.",
    image: "/images/blog/blog-03.jpg",
    tags: ["Bastubad"],
  },
];
export default blogData;
