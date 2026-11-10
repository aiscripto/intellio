import { TeamInterface } from "@/utility/objectInterface";
import Image from "next/image";
import React from "react";

const TeamMember: React.FC<{ limit?: number }> = ({ limit = -1 }) => {
  const teamMembers: TeamInterface[] = [
    {
      name: "Anjelina Watson",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb1.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      name: "John D. Alexon",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb2.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      name: "Shornaly M. Shila",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb3.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      name: "David Watson",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb4.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      name: "Jakulin P. Farna",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb5.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      name: "Joya C. Ahsan",
      role: "UI Designer",
      image: "/images/inner-img/team-thumb6.png",
      socials: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
  ];
  const displayedMembers =
    limit > 0 ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <div className="row">
      {displayedMembers.map((member, index) => (
        <div key={index} className="col-xl-4 col-lg-6 col-md-6">
          <div className="single-team-box">
            <div className="team-thumb">
              <figure className="reveal">
                <Image
                  width={250}
                  height={250}
                  src={member.image}
                  alt={member.name}
                />
              </figure>
            </div>

            <div className="team-content-box">
              <div className="team-content">
                <h3 className="team-title">
                  <a href="team-details.html">{member.name}</a>
                </h3>
                <h5 className="team-desi">{member.role}</h5>
              </div>

              <div className="team-social-icon">
                <ul>
                  {member.socials.facebook && (
                    <li>
                      <a href={member.socials.facebook}>
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                  )}
                  {member.socials.twitter && (
                    <li>
                      <a href={member.socials.twitter}>
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                  )}
                  {member.socials.pinterest && (
                    <li>
                      <a href={member.socials.pinterest}>
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="team-effiect1">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                src="/images/inner-img/team-box-eff1.png"
                alt="effect"
              />
            </div>
            <div className="team-effiect2">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                src="/images/inner-img/team-box-eff2.png"
                alt="effect"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="team-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Our Team</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Meet our Super Professional
                </h1>
                <h1 className="title split-text">Team Members</h1>
              </div>
            </div>
          </div>
        </div>
        <TeamMember limit={3} />
      </div>
      <div className="team-top-effiect fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/inner-img/team-top-effiect.png"
          alt="team effient"
        />
      </div>
    </section>
  );
};

export default Team;

export const TeamFull: React.FC = () => {
  return (
    <section
      className="team-page-title"
      style={{
        backgroundImage: "url(images/inner-img/team-bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="title-content">
            <h5 className="page-sub-title split_chars">Our Team</h5>
            <h1 className="page-title split-text">Meet Our Expert Team</h1>
            <p className="page-desc title-anim">
              Monotonectally whiteboard proactive with leading business to niche
              markets rather than tested
            </p>
          </div>
        </div>
        <TeamMember />
      </div>
    </section>
  );
};
