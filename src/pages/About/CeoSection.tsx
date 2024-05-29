import { Link } from "react-router-dom";
import Container from "../../components/reusable/Container";
import ceo from "../../assets/images/ceo.png";
import cto from "../../assets/images/cto.png";
const CeoSection = () => {
  return (
    <>
      <div className="ceo_top">
        <h2 className="col-md-10 mx-auto text-white py-5">
          At ZSI.ai, we deliver exceptional technology and software development
          services tailored to your unique business needs.
        </h2>

        <div className="text-center py-5">
          {" "}
          <Link className="start_onboarding" to={"/contact"}>
            Explore Now
          </Link>
        </div>
      </div>

      <div style={{ background: "#F2F2F2" }}>
        <Container>
          <div className="row mx-auto ceo_info py-5">
            <div className="col-md-6 my-4 pe-5">
              <p className="">
                <span>"</span>Looking ahead, our strategic vision is clear.
                Innovation remains at the core of our ethos and driving our
                commitment to staying at the forefront of technological
                advancements is our value. The rapidly changing landscape
                requires agility, empowering innovation through cutting-edge
                technology solutions for a digital tomorrow is our realistic
                vision.
                <span>"</span>
              </p>

              <div className="border col-md-10 d-flex justify-content-between bg-white rounded-1 mt-5 mx-auto">
                <div>
                  <img width={150} height={150} src={ceo} alt="" />
                </div>

                <div className="p-3">
                  <h4>Mustafizur R Moosa</h4>
                  <span>Founder &amp; CEO</span>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6 my-4 ps-5">
              <p>
                " Driven by innovation and excellence, our team is dedicated to
                advancing technology and service in this dynamic digital age. We
                focus on developing intuitive, user-centric solutions. Our
                diverse, creative team is our strength, committed to setting new
                industry standards and shaping a future where technology
                enriches lives."
              </p>

              <div className="border col-md-10 d-flex justify-content-between bg-white rounded-1 mt-5 mx-auto">
                <div>
                  <img width={150} height={150} src={cto} alt="" />
                </div>

                <div className="p-4">
                  <h4>Md. Sihab</h4>
                  <span>Group Chief Executive- strategy & CTO</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CeoSection;
