import ABoutGoldenMark from "./ABoutGoldenMark";
import AboutBanner from "./AboutBanner";
import CeoSection from "./CeoSection";
import Clients from "./Clients";
import TimeLine from "./TimeLine";
import "./About.css";
import History from "./History";
const fakeData = [
  {
    id: 1,
    icon: "🏆",
    title: " William Carter",
    position: "Vice President",
    url: "https://pacific-agro.com/public/",
    desc: "Partnering with ZSI to revamp our Pacific Agro website was enlightening. Their deep knowledge in the agriculture and aquaculture sectors was evident, crafting a site that reflects our dedication to sustainability and innovation. I endorse ZSI for their adeptness at encapsulating sector-specific details into effective web solutions. ",
    bgColor: "#f44336",
  },
  {
    id: 2,
    icon: "🥇",
    title: " Mir Rob",
    position: "President ",
    url: "https://rpclimo.com/",
    desc: "ZSI.ai crafted a custom booking system for RPC Limo, showcasing their niche in luxury transport. Their approach enhanced our service and efficiency, improving our web presence. Their focus on innovative, tailored web solutions establishes them as a key partner in specialized sectors. We commend and recommend ZSI.ai for their targeted expertise.",
    bgColor: "#2196f3",
  },
  {
    id: 3,
    icon: "🥈",
    title: "Alexander Brooks",
    position: "CEO",
    url: "https://cheaperbro.com/",
    desc: "ZSI.ai was crucial in developing Cheaper Bro's custom e-commerce platform, covering vital retail aspects from product listings to checkout efficiency, enhancing user experience. Their deep understanding of our needs boosted our digital presence and customer satisfaction. We commend their dedication and recommend ZSI.ai for outstanding e-commerce solutions.",
    bgColor: "#421D7B",
  },
  {
    id: 4,
    icon: "🥉",
    title: "Aarav Mehta",
    position: "CEO",
    url: "https://nycpestcontrol.us/",
    desc: "ZSI.ai significantly enhanced our web presence and client interactions, showcasing deep understanding and innovation in the pest control sector. Their commitment to user-centric design has elevated our service, underlining their dedication to excellence. We commend and endorse ZSI.ai for specialized, impactful web development in niche markets.",
    bgColor: "#2658D7",
  },
  {
    id: 5,
    icon: "🏅",
    title: "Jessica Roberts",
    position: "Manager ",
    url: "https://www.goldenmarkclothing.com/",
    desc: "ZSI's expertise shines through in Golden Mark Clothing's e-commerce platform, where seamless shopping meets stylish presentation. Their meticulous attention to detail has elevated our online presence, offering customers a convenient and enjoyable experience. With ZSI's collaboration, we've cemented our brand's reputation in the fashion&nbsp;industry.",
    bgColor: "#ff9800",
  },
  {
    id: 6,
    icon: "🏅",
    title: "Mohd S Islam",
    position: "Director Finance ",
    url: "https://mustafiz.org/",
    desc: "ZSI's impeccable development of our Mustafiz Foundation Inc website showcases their unmatched expertise. Their attention to detail and unwavering commitment to excellence have seamlessly woven our mission into a visually captivating platform. With ZSI's support, we're poised to extend our reach and effect transformative&nbsp;change",
    bgColor: "#4caf50",
  },
];

const About = () => {
  return (
    <>
      <AboutBanner />
      <TimeLine />
      <CeoSection />
      <Clients data={fakeData} activeSlide={2} />
      <ABoutGoldenMark />
      <History />
    </>
  );
};

export default About;
