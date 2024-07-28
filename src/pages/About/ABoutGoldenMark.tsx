import { Link } from 'react-router-dom';
import gmark from '../../assets/images/about_oldenMark.jpg';
import Container from '@/components/reusable/Container';
const ABoutGoldenMark = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-auto my-5  animated-gradient ">
          <div className="col-md-7 p-0 ">
            <img
              loading="lazy"
              src={gmark}
              alt=""
              className="img-fluid m-0"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-5 about-g-mark  ">
            <h2 className="">
              {' '}
              We are a global software Engineering company of GoldenMark Group
              in America.
            </h2>
            <p>
              In 1995 Our Parent Company Optimum International Limited Has
              Started Its Journey In Bangladesh And Established As A Trusted
              Global Partner.
            </p>

            <div className=" ps-4 mb-2 py-2">
              <Link to={'/contact'} className="contact_btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="row mx-auto my-5">
          <div className="col-md-6 my-2">
            <h1 className="fw-bold">Our talent People </h1>
            <p className="fs-5">
              We’re engineers, business managers, marketers. Creators,
              collaborators, and award winners. And together, we’re using our
              combined skills to solve the world’s biggest challenges and bring
              about positive change, right now.
            </p>
          </div>

          <div className="col-md-6   my-2">
            <div className="d-flex flex-wrap gap-3 justify-content-between percentage-of-people">
              <div className="bbb">
                <h3>99%</h3>{' '}
                <p>
                  Our Team has BS, MSc, <br /> or PhD holder
                </p>
              </div>
              <div className="bbb">
                <h3>95%</h3>{' '}
                <p>
                  senior & middle-level <br /> specialists
                </p>
              </div>
              <div className="bbb">
                <h3>85% </h3>
                <p>
                  People work with ZSI <br /> for 2+ years
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ABoutGoldenMark;
