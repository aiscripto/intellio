import Image from "next/image";
import Link from "next/link";

export const BlogCard: React.FC<{ limit?: number }> = ({ limit = -1 }) => {
  const blogs: {
    id: number;
    title: string;
    date: string;
    comments: number;
    thumb: string;
    link: string;
  }[] = [
    {
      id: 1,
      title: "Top 10 most popular AI Automation tools",
      date: "10 AUG, 2025",
      comments: 2,
      thumb: "/images/demo-img/blog-thumb1.png",
      link: "blog-details",
    },
    {
      id: 2,
      title: "How to generate audience Using AI Tools?",
      date: "12 AUG, 2025",
      comments: 1,
      thumb: "/images/demo-img/blog-thumb2.png",
      link: "blog-details",
    },
    {
      id: 3,
      title: "Most Popular tools Grow Your Business",
      date: "14 AUG, 2025",
      comments: 3,
      thumb: "/images/demo-img/blog-thumb3.png",
      link: "blog-details",
    },
    {
      id: 4,
      title: "15 Essential tools for grow Sales your product",
      date: "16 AUG, 2025",
      comments: 4,
      thumb: "/images/inner-img/blog-thumb4.png",
      link: "blog-details",
    },
    {
      id: 5,
      title: "How to install chatgpt on Your Browser",
      date: "18 AUG, 2025",
      comments: 5,
      thumb: "/images/inner-img/blog-thumb5.png",
      link: "blog-details",
    },
    {
      id: 6,
      title: "5 copywriting AI Tools for Unique Blog",
      date: "20 AUG, 2025",
      comments: 6,
      thumb: "/images/inner-img/blog-thumb6.png",
      link: "blog-details",
    },
  ];
  const displayedBlogs = limit > 0 ? blogs.slice(0, limit) : blogs;
  return (
    <div className="row">
      {displayedBlogs.map((blog) => (
        <div key={blog.id} className="col-xl-4 col-lg-6 col-md-6">
          <div className="single-blog-box">
            <div className="blog-thumb">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={blog.thumb}
                alt="thumb"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={blog.thumb}
                alt="thumb"
              />
              <div className="blog-meta">
                <Link href={blog.link}>{blog.date}</Link>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <div className="blog-btn">
                <Link href={blog.link}>
                  {blog.comments} Comments
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blog-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Latest Blog</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Read Our Latest Insights from
                </h1>
                <h1 className="title split-text">Update Blog Posts</h1>
              </div>
            </div>
          </div>
        </div>
        <BlogCard limit={3} />
      </div>
      <div className="blog-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/blog-top-eff.png"
          alt="blog effient"
        />
      </div>
    </div>
  );
};

export default Blog;
