import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lär dig mer | CBK",
  description: "Här har vi samlat matnyttig information om lantliv, vedhuggning, att basta och mycket mer.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Lär dig mer"
        description="Här har vi samlat matnyttig information om lantliv, vedhuggning, att basta och mycket mer."
      />

      <section className="pb-[120px] pt-[120px]">
      <SectionTitle title="Lär dig mer" paragraph="Här har vi samlat matnyttig information om lantliv, vedhuggning, att basta och mycket mer." center />

        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
          </div>
      </section>
    </>
  );
};

export default Blog;
