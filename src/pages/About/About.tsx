import AboutBanner from "./AboutBanner";
import CeoSection from "./CeoSection";
import Clients from "./Clients";
import TimeLine from "./TimeLine";
const fakeData = [
  {
    id: 1,
    icon: "🏆",
    title: "Client 1",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions.",
    bgColor: "#f44336",
  },
  {
    id: 2,
    icon: "🥇",
    title: "Client 2",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions.",
    bgColor: "#2196f3",
  },
  {
    id: 3,
    icon: "🥈",
    title: "Client 3",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions.",
    bgColor: "#4caf50",
  },
  {
    id: 4,
    icon: "🥉",
    title: "Client 4",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions.",
    bgColor: "#2658D7",
  },
  {
    id: 5,
    icon: "🏅",
    title: "Client 5",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions.",
    bgColor: "#ff9800",
  },
];

const About = () => {
  return (
    <>
      <AboutBanner />
      <TimeLine />
      <CeoSection />
      <Clients data={fakeData} activeSlide={3} />
    </>
  );
};

export default About;
