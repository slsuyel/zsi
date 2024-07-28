import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import '../../styles/Pages.css';
import ScrollToTop from '../../utils/ScrollToTop';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import { GoToTop } from 'go-to-top-react';
import Loader from '../ui/Loader';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    };
    loadData();
    AOS.init();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
