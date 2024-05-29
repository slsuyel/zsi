import logo from "../../assets/images/logo-1.png";
const Footer = () => {
  return (
    <footer
      className="new_footer_area bg_color"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div
        className="py-5 px-2 border-bottom"
        style={{ background: "#1C1324" }}
      >
        <div className="row mx-auto">
          <div className="col-md-3 px-2">
            <img
              loading="lazy"
              src={logo}
              className="img-fluid"
              alt="Company Logo"
              width={150}
            />
            <p className="mb-0 text-white mt-2">
              Embark on a transformative journey with our globally recognized
              software engineering services, trusted by companies worldwide.
            </p>
          </div>
          <div className="col-md-3 text-white">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="fs-4 fw-bold">Useful links</span>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  What we do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Who we are
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 text-white">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="fs-4 fw-bold">United States Office</span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  74-09 37TH Avenue, Suite 203B, Jackson Heights, NY 11372
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  General Inquiries: <br />
                  Phone: +1 (888) 887 5027
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  Sales Inquiries: <br />
                  Phone: +1 (718) 618 5766 <br />
                  Email:{" "}
                  <a href="mailto:sales@zsi.ai" className="text-white">
                    sales@zsi.ai
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-3 text-white">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="fs-4 fw-bold">Bangladesh Office</span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  House 16, 2nd floor, Road 20, Nikunjo-02, Khilkhet,
                  Dhaka-1229, Bangladesh
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  General Inquiries: <br />
                  Phone: +880 1713 017461
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  Sales Inquiries: <br />
                  Phone: +880 1722-597565 <br />
                  Email:{" "}
                  <a href="mailto:salesbd@zsi.ai" className="text-white">
                    salesbd@zsi.ai
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
