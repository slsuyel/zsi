import ino from "../../assets/images/future_of_tech_bloggif.gif";
import Container from "@/components/reusable/Container";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <Container>
      <div className="animated-gradient text-white p-5 my-5">
        <div>
          <div className="">
            <h2 className="">History</h2>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="fw-bold fs-1">
              How we started and where we are today.
            </h2>
          </div>
        </div>
        <div className="">
          <div className="elementor-widget-container">
            <p>
              ZSI, a subsidiary of GoldenMark Group, in America and is the
              ultimate reflection of Zenith Computers Ltd which has been started
              its journey in 1996 in Bangladesh. For better understanding and
              for saving the names in generations, we mean Z for Zenith
              computers, A for ASAUSA Chemicals, reflection of Optimum
              international (Pvt.) Ltd established in 1995 in Bangladesh, and G
              for GoldenMark Group that makes ZSI, running concern of our group
              and keep growing for innovation having commitment &amp;
              consistency.
            </p>
            <p>
              For over 26 years we have been synonyms with creating
              life-changing discoveries and scientific know-how, reinventing
              ourselves along the way. The history of the ZSI is a history of
              scientific and technological breakthroughs. From the beginning,
              our company has changed and evolved, so that we can keep finding
              essential innovation to solve the most challenging problems for
              better business, better life. When we had established this company
              we didn’t think about Software Development, E-commerce, Web
              development, App development, Staff Augmentation, AI and even
              didn’t think about Cyber security as our ambition was only to sell
              computer and computer accessories.
            </p>
            <p>
              It’s kind of evolving Ancient Civilization to Growth of American
              Civilization as I remember which I had to study in my two years
              college as common core when I was persuading my Cyber security
              engineering degree in QCC campus of CUNY and Later John Jay to
              CUNY Graduate Center. It’s the idea and dynamic change of human
              behavior and nature of evolvement and technological advancement
              for the best. Likewise in 1822, Charles Babbage’s difference
              engine could only be made to execute tasks by changing the gears
              which executed the calculations.
            </p>
            <p>
              Thus, the earliest form of a computer language was physical
              motion. Eventually, physical motion was replaced by electrical
              signals when the US Government built the ENIAC in 1942. This
              process proved to be very tedious.
              <br />
              By 1843, Ada Lovelace, the world’s first computer programmer, was
              the first to recognize that the analytical engine could do much
              more than just calculations. Each of the theories defines the
              human struggle and attempts to compete and survive in the
              communities by the use of technology and information in hand.
            </p>
            <p>
              Today here we are – our hard work, dedication, innovation and
              commitment for IT services &amp; technological fulfillment is
              consistent and highly accepted here and abroad. ZSI becomes a
              modern, diversified Software Development &amp; Cyber Security
              company and undergoes a major recognition.
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 row mx-auto">
        <div className="col-md-6 my-2">
          <img
            loading="lazy"
            draggable={false}
            src={ino}
            alt=""
            className="w-100"
          />
        </div>

        <div className="col-md-6">
          <div>
            <div>
              <h2 className="fw-bold fs-1">Science And Innovation</h2>
            </div>
          </div>
          <div>
            <div>
              <p className="fs-5">
                We're constantly discovering and delivering innovative and more
                sustainable solutions to help the world thrive. By combining our
                scientific and applications development expertise with
                sustainability principles and digital tools, we're accelerating
                the speed and impact that innovation can have on the world.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="ms-1">
                <Link className="start_onboarding" to={"/careers"}>
                  Want To Join ZSI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default History;
