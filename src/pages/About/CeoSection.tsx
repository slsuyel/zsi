import { Link } from "react-router-dom";

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
    </>
  );
};

export default CeoSection;
