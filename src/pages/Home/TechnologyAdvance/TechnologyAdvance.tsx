import img1 from "../../../assets/images/smg.jpg";
import img2 from "../../../assets/images/inte.jpg";
import img3 from "../../../assets/images/opr.jpg";
import img4 from "../../../assets/images/swot.jpg";
import img5 from "../../../assets/images/tec.jpg";
import img6 from "../../../assets/images/smg.jpg";
import img7 from "../../../assets/images/11.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";

const TechnologyAdvance = () => {
  const data = [
    {
      title: "Smart Goal",
      description:
        "Providing a clear framework for setting objectives, makes it easier to achieve successful outcomes.",
      img: img1,
    },
    {
      title: "Integration",
      description:
        "Integration increases efficiency by adopting innovative solutions.",
      img: img2,
    },
    {
      title: "Operation",
      description:
        "Creating ideas to innovation contribute to the success and sustainability of the business.",
      img: img3,
    },
    {
      title: "SWOT Analysis",
      description: "",
      img: img4,
    },
    {
      title: "Technology",
      description:
        "Enhancing efficiency, streamlining processes, and fostering innovation, we enable faster communication, automation of tasks, and development of new solutions.",
      img: img5,
    },
    {
      title: "Data Analytics",
      description:
        "Our visionary Data analytics enables organizations to harness the power of data to gain insights, make better decisions, and achieve their business objectives in today's data-driven world.",
      img: img6,
    },
    {
      title: "Managed IT Services",
      description:
        "We offer businesses a strategic approach to leveraging technology to improve efficiency, productivity, and competitiveness while reducing the burden of IT management and mitigating risks.",
      img: img7,
    },
  ];

  return (
    <div className="col-md-11 mx-auto">
      <br />
      <br />
      <div className=" mx-auto">
        <h3 className="fw-bold my-4 text-center">
          Technology Advances Are Making Tech More Human, Tech Is Everywhere But
          Innovation Is Somewhere. Innovate With ZSI.Ai
        </h3>
        <br />
      </div>
      <div className="row mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="col-md-3 my-1">
            <div className="cr-hver mx-2">
              <a href="#">
                <div className="show">
                  <img
                    loading="lazy"
                    src={item.img}
                    className=""
                    style={{ maxHeight: "320px", objectFit: "cover" }}
                    alt={item.title}
                  />

                  <h1 className="">{item.title}</h1>
                </div>
                <div className="hide ">
                  <div className="text-center">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>

                    <Button>Se More</Button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}

        <div className="align-items-center animated-gradient col-md-3 d-flex justify-content-center my-1 my-5">
          <div className="m-2">
            {" "}
            <Link
              className="btn btn-outline-light fs-6 fw-bold"
              to={"/services"}
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAdvance;
