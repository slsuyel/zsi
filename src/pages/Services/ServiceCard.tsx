import { ServicesProps } from "@/types/types";

interface ServiceListProps {
  data: ServicesProps[];
}

const ServiceCard = ({ data }: ServiceListProps) => {
  return (
    <div
      className="service-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {data &&
        data.map((d, index) => (
          <div
            key={index}
            className={`my-1 animated-gradient res-card mb-3  py-5 ${
              ["one", "two", "three", "four"][index % 4]
            }`}
          >
            <div className="row mx-auto container">
              <div className={`col-md-6 my-2 order-${index % 2 === 0 ? 1 : 2}`}>
                <div className="video_container mt-2">
                  <video
                    autoPlay
                    loop
                    muted
                    className="hidden-controls"
                    src={d.video}
                  ></video>
                </div>
              </div>
              <div className={`col-md-6      order-${index % 2 === 0 ? 2 : 1}`}>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <h5>{d.exploreText}</h5>
                <ul className="row">
                  {d.services.map((s) => (
                    <>
                      <li key={s} className="col-md-6 px-1">
                        <span>
                          <i className="fa-solid fa-caret-right"></i> {s}
                        </span>
                      </li>
                    </>
                  ))}
                </ul>
                <button className="explore-btn mb-4">Explore Services</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServiceCard;
