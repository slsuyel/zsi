import useIsMobile from '@/hooks/useIsMobile';
import Banner from '../Banner/Banner';
import DrivingGrowth from '../DrivingGrowth/DrivingGrowth';
import Ecosystem from '../Ecosystem/Ecosystem';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurIndustries from '../OurIndustries/OurIndustries';
import ScrollImage from '../ScrollImage/ScrollImage';
import RubeGoldberg from '../SendRequest/RubeGoldberg';

import ServiceCard from '../ServiceCard/ServiceCard';
import TechnologyAdvance from '../TechnologyAdvance/TechnologyAdvance';
import TrialPeriod from '../TrialPeriod/TrialPeriod';
import SendRequest from '../SendRequest/SendRequest';

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <ScrollImage />

      <Banner />

      {/* <div style={{ background: '#ECEEF0' }}>
        <div className="align-items-center container mx-auto py-5 row text-center">
          <h2 className="col-md-4" style={{ fontWeight: 700, fontSize: 50 }}>
            Time to Reinvent
          </h2>
          <img
            className="bg-transparent border-0 col-md-4 img-thumbnail"
            height={300}
            draggable={false}
            src="https://i.pinimg.com/originals/d0/73/35/d07335a92f67a04adc75b402004ad1d7.gif"
            // src="https://clipart-library.com/images/pTqrLg6ac.gif"
            alt=""
          />
          <h2 className="col-md-4" style={{ fontWeight: 700, fontSize: 50 }}>
            Starts here
          </h2>
        </div>
      </div> */}

      {isMobile ? <SendRequest /> : <RubeGoldberg />}

      <DrivingGrowth />
      <TrialPeriod />
      <OurExpertise />
      <OurIndustries />
      <TechnologyAdvance />
      <Ecosystem />
      <ServiceCard />
    </>
  );
};

export default Home;
