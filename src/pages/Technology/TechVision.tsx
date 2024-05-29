import { Link } from "react-router-dom";
import v1 from "../../assets/videos/tech-vision-v1.mp4";
import meta from "../../assets/videos/meta2.mp4";
import img from "../../assets/images/tech_vision-we.webp";
import Container from "@/components/reusable/Container";
const TechVision = () => {
  return (
    <Container>
      <div
        className="row mx-auto my-4 py-4"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="col-md-6 my-3">
          <div className="px-3 py-4 tech_bg">
            <h2 className="fw-bold">Technology vision 2024-25 </h2>
            <p className="py-3 fs-4">
              We know that our future is digital. AI is becoming more than human
              by design and organizations that prepare now will win the race in
              future.
            </p>
          </div>
        </div>
        <div className="col-md-6 my-3">
          <p className="fs-6">
            <i className="fab fs-1 me-2 text-primary fa-servicestack"></i>{" "}
            Businesses are leveraging AI to automate repetitive tasks,
            streamline operations, and improve efficiency across various
            departments such as customer service, human resources, and finance.
          </p>
          <p className="fs-6">
            <i className="fas fs-1 me-2 text-primary fa-chart-pie"></i>
            AI technologies such as machine learning and predictive analytics
            are being applied to optimize supply chain management, including
            inventory forecasting, demand planning, logistics optimization, and
            supplier relationship management.
          </p>
          <p className="fs-6">
            <i className="fas fs-1 me-2 text-primary fa-cubes"></i>
            Generative AI has much more potential than just a human like ChatGPT
            and Bard has become a driving force in making technology more
            inborn.
          </p>
        </div>

        <div className="my-4">
          <div className="d-flex gap-4 my-4 py-3">
            <svg
              style={{ fill: "#0d6efd" }}
              width={120}
              aria-hidden="true"
              className="e-font-icon-svg e-fas-paper-plane"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
            </svg>
            <p className="vision-txt-icon ">
              Explore the landscape of AI startups, innovations, and
              entrepreneurship, including emerging trends, investment
              opportunities, and the role of AI in fostering economic growth and
              job creation.
            </p>
          </div>

          <div className="d-flex gap-4 my-4 py-3">
            <svg
              width={120}
              style={{ fill: "#0d6efd" }}
              aria-hidden="true"
              className="e-font-icon-svg e-fas-fingerprint"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256.12 245.96c-13.25 0-24 10.74-24 24 1.14 72.25-8.14 141.9-27.7 211.55-2.73 9.72 2.15 30.49 23.12 30.49 10.48 0 20.11-6.92 23.09-17.52 13.53-47.91 31.04-125.41 29.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55-2.69 12.98 5.67 25.69 18.64 28.36 13.05 2.67 25.67-5.66 28.36-18.64 10.34-50.09 15.17-101.58 14.37-153.02-.41-25.95 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47.77 48.05-2.81 96.33-10.61 143.55-2.17 13.06 6.69 25.42 19.76 27.58 19.97 3.33 26.81-15.1 27.58-19.77 8.28-50.03 12.06-101.21 11.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48-25.62 31.5-39.39 71.28-38.75 112 .59 37.58-2.47 75.27-9.11 112.05-2.34 13.05 6.31 25.53 19.36 27.89 20.11 3.5 27.07-14.81 27.89-19.36 7.19-39.84 10.5-80.66 9.86-121.33-.47-29.88 9.2-57.88 28-80.97 8.35-10.28 6.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97-12.89 3.06-20.87 15.98-17.83 28.89 3.06 12.89 16 20.83 28.89 17.83 11.05-2.61 22.47-3.77 34-3.69 75.43 1.13 137.73 61.5 138.88 134.58.59 37.88-1.28 76.11-5.58 113.63-1.5 13.17 7.95 25.08 21.11 26.58 16.72 1.95 25.51-11.88 26.58-21.11a929.06 929.06 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94 2.86-21.12 15.66-18.26 28.61 4.71 21.41 4.91 37.41 4.7 61.6-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02 183.02-.82 118.47 24.91 70.46 72.94 24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69.23.02.48.02.72.02 12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139 38.76-38.8 91.34-59.67 147.68-58.86 69.45 1.03 134.73 35.56 174.62 92.39 7.61 10.86 22.56 13.45 33.42 5.86 10.84-7.62 13.46-22.59 5.84-33.43z" />
            </svg>
            <p className="vision-txt-icon ">
              A suite of Technology from face recognition to machine learning
              are starting to understand people more deeply and in a more
              customized way. So, business can tap into these people as new
              customers and new resources.
            </p>
          </div>

          <div className="d-flex gap-4 my-4 py-3">
            <svg
              style={{ fill: "#0d6efd" }}
              width={90}
              aria-hidden="true"
              className="e-font-icon-svg e-fas-dice-six"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
            </svg>
            <p className="vision-txt-icon ">
              It’s time for reinvention, early adopter and smart business have
              kick-started the race towards a new era of capability and
              possibility.
            </p>
          </div>

          <div className="text-center">
            <Link className="start_onboarding" to={"/contact"}>
              LET’S TALK ABOUT REINVENTION
            </Link>
          </div>
        </div>

        <div className="col-md-6 p-0">
          <video
            autoPlay
            loop
            muted
            className="w-100 p-0"
            src={v1}
            style={{ height: "500px", objectFit: "cover" }}
          ></video>
        </div>
        <div className="col-md-6 p-0">
          <img
            loading="lazy"
            src={img}
            alt=""
            className="w-100 p-0"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="row mx-auto mt-5 pt-4">
        <div className="col-md-6 pt-3">
          <h2 style={{ fontWeight: 700 }}>METAVERSE</h2>
          <h6 className="fw-bold"> AN AMAZING JOURNEY OF DIGITAL LIFE</h6>

          <div className=" mt-4">
            <p style={{ fontSize: 18 }}>
              Now we know that the metaverse could revolutionize social
              interactions by providing immersive environments to reshape
              culture by providing new avenues for creativity, expression, and
              collaboration. Virtual art galleries, music festivals, and
              storytelling experiences could become mainstream forms of
              entertainment.
            </p>
            <p style={{ fontSize: 18 }}>
              Just as the internet has created new economic opportunities, the
              metaverse could spawn a new wave of industries and jobs. Virtual
              real estate, digital goods, virtual events management, and other
              businesses could thrive within this space.
            </p>

            <p style={{ fontSize: 18 }}>
              Virtual classrooms and training simulations within the metaverse
              could provide immersive and interactive learning experiences. This
              could be particularly useful for fields like medicine,
              engineering, and other hands-on professions.
            </p>

            <div className="text-center">
              <Link to={"/contact"} className="start_onboarding">
                LET’S TALK ABOUT METAVERSE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {" "}
          <video
            autoPlay
            loop
            muted
            className="w-100 p-0 responsive_video"
            src={meta}
            style={{ height: "540px", objectFit: "cover" }}
          ></video>
        </div>
      </div>
    </Container>
  );
};

export default TechVision;
