import { Link } from "react-router-dom";

const SendRequest = () => {
  return (
    <div className="bg-primary my-5">
      <div className="row mx-auto p-3">
        <div className=" col-md-6">
          <form className="p-4 rounded  text-white">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
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
                className="form-control p-2 "
                id="message"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Choose File
              </label>
              <input type="file" className="form-control p-2 " id="file" />
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
            <button type="submit" className="btn btn-light">
              Send Request
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="mt-4 text-white ">
            <div className="mt-2">
              <h2 className="fw-bold my-5">
                Let’s Reinvent Something Great Together.
              </h2>
            </div>
            <div className="my-5">
              <p className="fs-5">
                We believe in turning ideas into reality and we’re ready to join
                your journey. Reach out to us and let’s start discussing your
                project.
              </p>
            </div>

            <div>
              <h3> Want to experience our services?</h3>
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
