import { useState } from "react";
import { Modal } from "antd";
import img1_png from "../../../assets/ecosystem/a (1).png";
import img1_webp from "../../../assets/ecosystem/a (1).webp";
import img2_png from "../../../assets/ecosystem/a (2).png";
import img2_webp from "../../../assets/ecosystem/a (2).webp";
import img3_png from "../../../assets/ecosystem/a (3).png";
import img3_webp from "../../../assets/ecosystem/a (3).webp";
import img4_png from "../../../assets/ecosystem/a (4).png";
import img4_webp from "../../../assets/ecosystem/a (4).webp";
import img5_png from "../../../assets/ecosystem/a (5).png";
import img5_webp from "../../../assets/ecosystem/a (5).webp";
import img6_webp from "../../../assets/ecosystem/a (6).webp";
import img7_webp from "../../../assets/ecosystem/a (7).webp";
import img8_webp from "../../../assets/ecosystem/a (8).webp";
import img9_webp from "../../../assets/ecosystem/a (9).webp";
import bnr from "../../../assets/images/zsi-banner.jpg";

const Ecosystem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [url, setUrl] = useState("");

  const data = [
    img1_png,
    img2_png,
    img3_png,
    img4_png,
    img5_png,
    img1_webp,
    img2_webp,
    img3_webp,
    img4_webp,
    img5_webp,
    img6_webp,
    img7_webp,
    img8_webp,
    img9_webp,
  ];

  const showModal = () => {
    setUrl("https://www.youtube.com/embed/32IFthr0bUE");
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUrl("");
  };

  return (
    <>
      <div className="mx-auto row animated-gradient">
        <div className="col-md-6 p-3 text-white">
          <div className="m-3 p-3">
            <h2 className="mt-4" data-aos="fade-up-right">
              Reinventing means pushing the limits of possibility and protection
              for a better, stronger and safer tomorrow.
            </h2>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "28px",
                marginTop: "43px",
              }}
            >
              Innovations in digital technologies, data and AI are changing
              everything. Reinvention is not just a choice but a necessity for
              businesses looking to thrive in today’s digital economy.
              Digitalization fosters innovation by providing businesses with the
              tools and capabilities to develop new products, services, and
              business models. By embracing digital technologies and integrating
              them into all aspects of their operations, organizations can
              enhance competitiveness, improve efficiency, and deliver superior
              customer experiences in an increasingly digital world. Let’s
              reinvent together to see the next version of yourself. We ensure
              your position is beyond market standard.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative pe-0">
          <div className="video-container-ecosystem">
            <div className="play-btn-eco" onClick={showModal}>
              <i
                className="fa-solid fa-play text-white "
                style={{ fontSize: "48px" }}
              ></i>
            </div>
          </div>
          <Modal
            title="Video"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            centered
            width={800}
          >
            <iframe
              width="100%"
              height="450"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal>
        </div>
      </div>

      <br />
      <br />

      <div
        className=" col-md-11 mx-auto my-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="px-2">
          <h1 className="fw-bold my-4">Our Ecosystem</h1>
          <h6 className="fs-5">
            We take our challenge seriously. Collaborative innovation through a
            vast global network allows us to combine our strengths and
            expertise, accelerating the development process and bringing more
            robust and feature-rich offerings to the market.
          </h6>
          <br />
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center ">
          {data.map((i) => (
            <img
              loading="lazy"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="border p-1 my-2"
              key={i}
              width={150}
              height={80}
              src={i}
              alt=""
            />
          ))}
        </div>
      </div>

      <br />
      <div
        className="mx-auto row animated-gradient"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="col-md-6 p-0">
          <img
            loading="lazy"
            src={bnr}
            alt=""
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="col-md-6 p-3 text-white">
          <div className="m-3 p-3">
            <h2 className="fw-bold">Unveiling Tech Excellence.</h2>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "28px",
                marginTop: "23px",
              }}
            >
              ZSI is one of the leading & pioneer software development companies
              having excellent reputation in the technological world. Recently
              we have initiated our plan expansion which has resulted in
              diversifying areas such as advanced E-commerce development,
              globalization of E-Commerce, high resolution Web development,
              Staff Augmentation and Cyber security services. Our hard work,
              dedication, innovation and commitment for IT services &
              technological fulfillment are pretty consistent and highly
              accepted locally and globally. As a ZSI team we gather
              information, combine the engineers and intellectuals to innovate
              and invent the best way to solve for untangling the complexities,
              and manipulate the program toward easy accessible and useable at
              its maximum strength possible. We have been helping various
              clients locally and internationally for many of their
              technological and programming needs and demand having high level
              satisfaction. We are adaptable and flexible, our approach is
              dynamic rather than static which we call our persona, and we make
              the solution in the simplest form so that our customer can get
              things done as the easiest way possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecosystem;
