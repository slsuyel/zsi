import { useEffect, useState } from 'react';
import './ImageZoom.css';

const ScrollImage = () => {
  const [zoomClass, setZoomClass] = useState('');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setZoomClass('zoom-in');
    } else {
      setZoomClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="img-container">
      <div className={`background-image `}></div>
      <img
        className={`img-fluid img-zoom-s ${zoomClass}`}
        src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
        alt="Zoomable"
      />
    </div>
  );
};

export default ScrollImage;
