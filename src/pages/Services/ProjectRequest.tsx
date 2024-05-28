import { Link } from "react-router-dom";

const ProjectRequest = () => {
  return (
    <div className="col-md-11 mx-auto my-5">
      <div className="row mx-auto ">
        <div className="col-md-6 my-3">
          <h1 className="service-reqqq">
            Let’s Build <br /> Something Great <br /> Together
          </h1>
          <p className="my-3">
            We believe in turning ideas into reality and we’re ready to join
            your journey. Reach out to us and let’s start discussing your
            project.
          </p>
          <h6>
            Sales and general inquires
            <br /> <br />
            <a href="">info@zsi.ai</a>
          </h6>
          <br />
          <h6>
            {" "}
            Want to join ZSI? <br /> <br />
            <Link to="/careers">Explore careers</Link>
          </h6>
        </div>
        <div className="col-md-6 my-3">
          <form className="row mx-auto">
            <div className="form-group my-2 col-md-6">
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group my-2 col-md-6">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Enter your company name"
              />
            </div>
            <div className="form-group my-2">
              <textarea
                rows={5}
                className="form-control"
                id="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="form-group my-2 mt-4">
              <input type="file" className="form-control-file" id="file" />
            </div>
            <div className="form-group my-2 form-check">
              <label
                className="form-check-label"
                htmlFor="dataProcessingConsent"
              >
                Please be informed that when you click the Send button ZSI will
                process your personal data in accordance with our Privacy notice
                for the purpose of providing you with appropriate information.
              </label>
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="btn btn-primary"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectRequest;
