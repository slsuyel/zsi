import Banner from "../Banner/Banner";
import DrivingGrowth from "../DrivingGrowth/DrivingGrowth";
import Ecosystem from "../Ecosystem/Ecosystem";
import OurExpertise from "../OurExpertise/OurExpertise";
import OurIndustries from "../OurIndustries/OurIndustries";
import SendRequest from "../SendRequest/SendRequest";
import ServiceCard from "../ServiceCard/ServiceCard";
import TechnologyAdvance from "../TechnologyAdvance/TechnologyAdvance";
import TrialPeriod from "../TrialPeriod/TrialPeriod";

const Home = () => {
  return (
    <div>
      <Banner />

      <SendRequest />

      <DrivingGrowth />
      <TrialPeriod />
      <OurExpertise />
      <OurIndustries />
      <TechnologyAdvance />
      <Ecosystem />
      <ServiceCard />
    </div>
  );
};

export default Home;
