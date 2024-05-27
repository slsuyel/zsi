import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import "../../styles/Pages.css";
import ScrollToTop from "../../utils/ScrollToTop";
import Header from "./../ui/Header";
import Footer from "./../ui/Footer";
import { GoToTop } from "go-to-top-react";
const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </ScrollToTop>
  );
};

export default MainLayout;
