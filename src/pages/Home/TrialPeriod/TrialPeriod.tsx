import { Card } from "antd";
import { Link } from "react-router-dom";

const TrialPeriod = () => {
  return (
    <>
      <div className="row mx-auto col-md-11">
        <div className="col-md-4 p-0 ">
          <img
            className="w-100"
            height={300}
            src="https://giffiles.alphacoders.com/120/120251.gif"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="ps-1">
            <p>
              ZSI offers you to extend your in-house talent with our remote
              dedicated team of engineering professionals, architects, and
              project managers with proven experience in creating architecture,
              as well as building complete solutions, deploying to production,
              and performing operations management.
            </p>
            <p>
              92% of our employees are senior- or mid-level engineers with
              degrees in computer science or math. Our core strength lies in the
              ability to enhance your current teams with our talent or build
              elite teams from the ground up.
            </p>
            <br />
            <div className="animated-gradient text-white rounded p-2">
              <h6 className="fs-4 fw-bold p-2 mb-0">ZERO-RISK TRIAL PERIOD </h6>
              <p className="fs-6 ps-2">
                {" "}
                Pay only if you are satisfied with our work
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="col-md-11 mx-auto  my-5">
        <div className="row text-center mx-auto ">
          <div className="col-md-4 mb-4">
            <Card hoverable>
              <div className=" h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-user fa-3x mb-3"></i>
                  <h5 className="card-title">ONE-PERSON TEAM</h5>
                  <p className="card-text">
                    A profound expert focused on a required field, complementing
                    your existing team.
                  </p>
                </div>
              </div>
              <br />

              <hr className="blue-hr" />
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card hoverable>
              <div className=" h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-users fa-3x mb-3"></i>
                  <h5 className="card-title">DEDICATED TEAM</h5>
                  <p className="card-text">
                    A custom team comprising 2–10 professionals to assist in the
                    development process or support an ongoing project.
                  </p>
                </div>
              </div>
              <br />

              <hr className="blue-hr" />
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card hoverable>
              <div className=" h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-project-diagram fa-3x mb-3"></i>
                  <h5 className="card-title">DEDICATED TEAM + LEADER</h5>
                  <p className="card-text">
                    A dedicated team managed by a team leader to take full
                    responsibility for your project from a prototype to an MVP.
                  </p>
                </div>
              </div>

              <hr className="blue-hr" />
            </Card>
          </div>
          <div>
            <Link to={"/contact-us"} className="start_onboarding">
              Start onboarding
            </Link>
          </div>
        </div>
      </div>

      <br />

      <div
        className="col-md-11  my-5 row mx-auto "
        style={{ background: "rgb(110 96 254)" }}
      >
        <div className="col-md-6  px-0">
          <div>
            <img
              draggable={false}
              className="img-fluid w-100 p-0"
              src="https://cdn.dribbble.com/users/2514124/screenshots/6565372/first_work_1.gif"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-6 my-auto text-center">
          <div className="">
            <h1 className="fs-3 fw-bold mb-4 text-white">
              We're pushing the limits of possibility through Ai driven
              innovation and worldwide collaboration.
            </h1>

            <div>
              <Link to={"/services"} className="discover_now">
                Discover now, Right now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrialPeriod;
