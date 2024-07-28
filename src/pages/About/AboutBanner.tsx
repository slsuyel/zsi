import img from '../../assets/images/about-us.jpg';
import Container from '@/components/reusable/Container';
import { useEffect, useState } from 'react';

const AboutBanner = () => {
  const words = [
    'vision',
    'strategy',
    'expertise',
    'precision',
    'synergy',
    'insight',
    'creativity',
    'clarity',
    'ingenuity',
    'genius',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex: number) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    typeWriter();
  }, [currentWordIndex]);

  const speed = 100;

  const typeWriter = () => {
    const span = document.getElementById('demo');
    if (span) {
      span.innerHTML = '';
      const word = words[currentWordIndex];
      let j = 0;
      const wordInterval = setInterval(() => {
        if (j < word.length) {
          span.innerHTML += word.charAt(j);
          j++;
        } else {
          clearInterval(wordInterval);
        }
      }, speed);
    }
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1
          style={{ color: '#8938E5', fontWeight: 900 }}
          className="fs-3  py-3 text-center"
        >
          WHO WE ARE
        </h1>

        <div className="row mx-auto py-5 bg-black">
          <div className="col-6 my-auto py-5">
            <h6 className="align-items-end fs-4 mx-auto row text-white text-center">
              <span className="col-md-6 my-1 d-block text-start">
                Crafting Tomorrow’s <br /> Solutions with Today’s
              </span>
              <span
                id="demo"
                className="animated-gradient col-md-3 py-1 py-2 rounded-1 text-capitalize text-center d-block"
              ></span>
              <span className="col-md-3 my-1 d-block">at ZSI.ai</span>
            </h6>
          </div>
        </div>
      </div>

      <Container>
        <div
          className="row mx-auto animated-gradient my-5"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="col-md-6 p-0">
            <img
              loading="lazy"
              src={img}
              alt=""
              className="img-fluid"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-6 ">
            <div className=" p-4">
              <p style={{ color: '#fff', fontSize: '21px', border: 'none' }}>
                Pioneering the future, ZSI.ai masterfully blends{' '}
                <span style={{ color: '#fff' }}>
                  <strong>
                    <span style={{ color: '#fff618' }}>
                      cutting-edge technology&nbsp;
                    </span>
                  </strong>
                </span>
                and{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>
                    innovative strategy&nbsp;
                  </span>
                </strong>
                to craft bespoke software solutions that redefine industries.
                Our{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>
                    agile methodologies&nbsp;
                  </span>
                </strong>
                and profound{' '}
                <span style={{ color: '#fff' }}>
                  <strong>
                    <span style={{ color: '#fff618' }}>
                      technical acumen&nbsp;
                    </span>
                  </strong>
                </span>
                set us apart, driving{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>growth&nbsp;</span>
                </strong>
                and{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>
                    operational excellence.&nbsp;
                  </span>
                </strong>
                Embark on a transformative journey with a partner at the
                vanguard of{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>
                    digital evolution.&nbsp;
                  </span>
                </strong>
                Join us to forge a legacy of{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>success&nbsp;</span>
                </strong>
                and{' '}
                <strong>
                  <span style={{ color: '#fff618' }}>innovation.</span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="container mb-5 py-5">
        <h2 className="scrl-h2-tx1" data-aos="fade-right">
          Unlocking the Strategic{' '}
        </h2>
        <h2 className="scrl-h2-tx2 " data-aos="fade-left">
          Benefits with ZSI.ai
        </h2>
      </div>
    </>
  );
};

export default AboutBanner;
