import { MarqueeInterface } from "@/utility/objectInterface";
import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

const ProjectCard: React.FC<{ project?: boolean }> = ({ project = true }) => {
  const projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  }[] = [
    {
      id: 1,
      title: "Nuro Nexus Vision",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than Download and use",
      image: "/images/demo-img/project-thumb1.png",
      link: "index-3",
      tags: ["CODING", "DESIGN"],
    },
    {
      id: 2,
      title: "Brainwave Hub",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than Download and use",
      image: "/images/demo-img/project-thumb2.png",
      link: "index-3",
      tags: ["CODING", "DESIGN"],
    },
    {
      id: 3,
      title: "Deep Genius Pro",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than Download and use",
      image: "/images/demo-img/project-thumb3.png",
      link: "index-3",
      tags: ["CODING", "DESIGN"],
    },
  ];
  const projectClass = project ? "project" : "portfolio";
  return (
    <div className="row">
      {projects.map((project) => (
        <div className="col-xl-4 col-lg-6 col-md-6" key={project.id}>
          <div className={`single-${projectClass}-box`}>
            <div className={`${projectClass}-box`}>
              <div className={`${projectClass}-thumb`}>
                <figure className="reveal">
                  <Image
                    width={384}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "384px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src={project.image}
                    alt={project.title}
                  />
                </figure>
                <div className={`${projectClass}-arrow`}>
                  <Link href={project.link}>
                    <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
              </div>

              <div className={`${projectClass}-content`}>
                <div className="title">
                  <h4 className="text-anime-3">
                    <a href={project.link}>{project.title}</a>
                  </h4>
                </div>
                <div className="description">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className={`${projectClass}-button`}>
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? `${projectClass}-btn`
                        : `${projectClass}-btn-two`
                    }
                  >
                    <a href={project.link}>{tag}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Project: React.FC = () => {
  const marqueeItems: MarqueeInterface[] = [
    { text: "PROJECTS", highlight: true },
    { text: "PROJECTS", highlight: false },
    { text: "PROJECTS", highlight: true },
  ];

  return (
    <div className="project-marquee-area-one">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Marquee items={marqueeItems} />
          </div>
        </div>
      </div>
      <div className="container">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;

export const Project2: React.FC = () => {
  return (
    <div className="portfolio-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Portfolio</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">Browse Our Latest Finished</h1>
                <h1 className="title split-text">Creative Works</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <ProjectCard project={false} />
      </div>
      <div className="portfolio-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-effient.png"
          alt="accordion effient"
        />
      </div>
    </div>
  );
};
