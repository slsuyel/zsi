import video from "../../assets/videos/zsi-home-main-video-small-1-1.mp4";
const TechnologyBanner = () => {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="2000">
        <h1
          style={{ color: "#8938E5", fontWeight: 900 }}
          className="fs-3  py-4 text-center"
        >
          TECHNOLOGY
        </h1>
        <div className="header-wave animated-gradient">
          <div className="py-4 px-4 ">
            <p className="fs-5 fw-medium ">
              In the heart of innovation, where bytes of data dance in the
              digital ether, ZSI.AI stands as a beacon of progress, shaping the
              future of technology one breakthrough at a time. At ZSI.AI, we
              believe in harnessing the power of technology to drive positive
              change in the world. Our vision for the future is centered around
              three core pillars: innovation, collaboration, and sustainability.
            </p>
            <p className="fs-5 fw-medium ">
              Of course, as stewards of the planet, we recognize the importance
              of sustainability in everything we do. Our vision extends beyond
              just technological innovation. It is about using technology as a
              force for good, empowering people and communities to thrive in an
              increasingly interconnected world.
            </p>
            <p className="fs-5 fw-medium ">
              As we embark on this journey into the future, we invite you to
              join us in shaping the technology landscape of tomorrow. Together,
              we can pioneer a future that is brighter, more inclusive, and more
              sustainable for all.
            </p>
          </div>
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="col-md-11 mx-auto my-4">
        <video
          style={{ width: "100%" }}
          controls={false}
          autoPlay
          muted
          loop
          src={video}
        ></video>
      </div>
    </>
  );
};

export default TechnologyBanner;
