import { BlogCard } from "@/components/Blog";
import IntellioLayout from "@/layout/IntellioLayout";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="blog-page-title"
        style={{
          backgroundImage: "url(images/inner-img/about-page-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Our Blog</h5>
              <h1 className="page-title split-text">Latest Blog</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <BlogCard />
        </div>
      </section>
    </IntellioLayout>
  );
};

export default BlogPage;
