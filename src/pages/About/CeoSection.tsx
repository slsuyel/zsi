import { Link } from 'react-router-dom';
import Container from '../../components/reusable/Container';
import ceo from '../../assets/images/ceo.png';
import cto from '../../assets/images/cto.png';
const CeoSection = () => {
  return (
    <>
      <div className="ceo_top">
        <h2 className="col-md-10 mx-auto text-white py-5">
          At ZSI.ai, we deliver exceptional technology and software development
          services tailored to your unique business needs.
        </h2>

        <div className="text-center py-5">
          {' '}
          <Link className="start_onboarding" to={'/contact'}>
            Explore Now
          </Link>
        </div>
      </div>

      <div style={{ background: '#F2F2F2' }}>
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
                  <img
                    loading="lazy"
                    width={150}
                    height={150}
                    src={ceo}
                    alt=""
                  />
                </div>

                <div className="p-3 ps-4">
                  <div className="">
                    <h4>Mustafizur R Moosa</h4>
                    <span>Founder &amp; CEO</span>{' '}
                  </div>
                  <div className="ct-social-box mt-3">
                    <a
                      className="text-decoration-none"
                      href="http://www.linkedin.com/in/mustafizur-moosa-a468b2189"
                      data-network="linkedin"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className=" text-white">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.twitter.com/zsi_ai"
                      data-network="twitter"
                      aria-label="X (Twitter)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://youtube.com/@zsi-ai?si=KF2xcEeFBiQ6ORYk"
                      data-network="youtube"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.facebook.com/profile.php?id=100094733899634&mibextid=JRoKGi"
                      data-network="facebook"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.instagram.com/zsi_ai?igsh=MTNwdWt1YW80cHVo&utm_source=qr"
                      data-network="instagram"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <circle cx={10} cy={10} r="3.3" />
                          <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
                        </svg>
                      </span>{' '}
                    </a>
                  </div>
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
                  <img
                    loading="lazy"
                    width={150}
                    height={150}
                    src={cto}
                    alt=""
                  />
                </div>

                <div className="p-3 ps-4">
                  <div>
                    <h4>Md. Sihab</h4>
                    <span>Group Chief Executive- strategy & CTO</span>{' '}
                  </div>
                  <div className="ct-social-box">
                    <a
                      className="text-decoration-none"
                      href="http://www.linkedin.com/in/mustafizur-moosa-a468b2189"
                      data-network="linkedin"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className=" text-white">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.twitter.com/zsi_ai"
                      data-network="twitter"
                      aria-label="X (Twitter)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://youtube.com/@zsi-ai?si=KF2xcEeFBiQ6ORYk"
                      data-network="youtube"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.facebook.com/profile.php?id=100094733899634&mibextid=JRoKGi"
                      data-network="facebook"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
                        </svg>
                      </span>{' '}
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://www.instagram.com/zsi_ai?igsh=MTNwdWt1YW80cHVo&utm_source=qr"
                      data-network="instagram"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <circle cx={10} cy={10} r="3.3" />
                          <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
                        </svg>
                      </span>{' '}
                    </a>
                  </div>
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
