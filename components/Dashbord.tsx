import Image from "next/image";

const Dashbord = () => {
  const thumbs = [
    {
      src: "/images/demo-img/dashbord-thumb1.png",
      width: 536,
      col: "col-lg-5",
    },
    {
      src: "/images/demo-img/dashbord-thumb2.png",
      width: 312,
      col: "col-lg-3",
    },
    {
      src: "/images/demo-img/dashbord-thumb3.png",
      width: 424,
      col: "col-lg-4",
    },
  ];
  return (
    <section className="dashbord-section-one">
      <div className="auto-container">
        <div className="row">
          {thumbs.map(({ src, col, width }, i) => (
            <div className={col} key={i}>
              <div className="dashbord-thumb">
                <figure className="reveal">
                  <Image
                    width={width}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: `${width}px`,
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src={src}
                    alt={`dashboard thumb ${i + 1}`}
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashbord;
