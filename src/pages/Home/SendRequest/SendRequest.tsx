import { Link } from "react-router-dom";

const SendRequest = () => {
  return (
    <div className="bg-primary my-5" data-aos="fade-up">
      <div className="row mx-auto p-3 w-100">
        <div className=" col-md-6">
          <form className="p-4 rounded  text-white">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  data-aos="fade-up"
                  type="text"
                  className="form-control p-2 "
                  id="fullname"
                  placeholder="Full Name"
                />{" "}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  data-aos="fade-up"
                  type="email"
                  className="form-control p-2 "
                  id="email"
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  data-aos="fade-up"
                  type="tel"
                  className="form-control p-2 "
                  id="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  data-aos="fade-up"
                  type="text"
                  className="form-control p-2 "
                  id="company"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                How can we help you?
              </label>
              <textarea
                // data-aos="zoom-in"
                className="form-control p-2 "
                id="message"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Choose File
              </label>
              <input
                type="file"
                data-aos="zoom-out"
                className="form-control p-2 "
                id="file"
              />
            </div>
            <div className=" mb-2 ">
              <small className="form-text text-white ">
                Please be informed that when you click the Send button ZSI will
                process your personal data in accordance with our{" "}
                <a href="#" className="text-light">
                  Privacy notice
                </a>{" "}
                for the purpose of providing you appropriate information.
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-light"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Send Request
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="mt-4 text-white ">
            <div className="mt-2">
              <h2 className="fw-bold my-5" data-aos="fade-up">
                Let’s Reinvent Something Great Together.
              </h2>
            </div>
            <div className="my-5">
              <p className="fs-5" data-aos="fade-up">
                We believe in turning ideas into reality and we’re ready to join
                your journey. Reach out to us and let’s start discussing your
                project.
              </p>
            </div>

            <div>
              <h3 data-aos="fade-up"> Want to experience our services?</h3>
              <Link to={""} className="fs-6 text-white">
                Explore options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendRequest;
