import Container from "@/components/reusable/Container";
import career from "../../assets/images/career_zsi.jpg";
import { useEffect, useState } from "react";

const CareerBanner = () => {
  const words = [
    "vision",
    "strategy",
    "expertise",
    "precision",
    "synergy",
    "insight",
    "creativity",
    "clarity",
    "ingenuity",
    "genius",
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
    const span = document.getElementById("demo");
    if (span) {
      span.innerHTML = "";
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
          style={{ color: "#8938E5", fontWeight: 900 }}
          className="fs-3  py-3 text-center"
        >
          CAREERS
        </h1>

        <div className="row mx-auto bg-black">
          <div className="col-md-6 my-auto ">
            <h6 className="align-items-end fs-4 mx-auto row text-white text-center">
              <span className="col-md-6 my-1 ">Join our team and amplify</span>
              <span
                id="demo"
                className="animated-gradient col-md-3 py-1 py-2 rounded-1 text-capitalize text-center d-block"
              >
                {""}
              </span>
              <span className="col-md-3 my-1 d-block">at ZSI.ai</span>
            </h6>
          </div>

          <div className="col-md-6 text-center">
            <img src={career} alt="" width={"50%"} className="img-fluid" />
          </div>
        </div>

        <Container>
          <div className="row mx-auto career_page_banner my-5">
            <div className="col-md-6">
              <h1>There’s never been a more exciting time to join us</h1>
            </div>

            <div className="col-md-6">
              <p>
                It’s a time of incredible progress at ZSI, a time of momentum.
                It’s the time for change, for the doers and pioneer, to create
                essential innovations the technological world needs. We aren’t
                just creating a better future, we are working together to invent
                a better now. So bring your best self and join us in uncovering
                insights that will transform the world for the best
                technological advancement.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CareerBanner;
