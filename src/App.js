import "./styles/app.scss";
import { photos } from "./data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import Navbar from "./components/Navbar";
import GalleryItem from "./components/GalleryItem";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

function App() {
  const refScrollContainer = useRef(null);

  useEffect(() => {
    if (refScrollContainer) {
      new LocomotiveScroll({
        el: refScrollContainer.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);

  // Generate gallery items (repeat 4 x 5 photos)
  const images = photos.map((imageUrl, imageIndex) => {
    return <GalleryItem src={imageUrl} key={imageUrl} index={imageIndex} />;
  });

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <div
          className='scroll-container'
          data-scroll-container
          ref={refScrollContainer}
        >
          <div className='content'>
            <div className='gallery'>
              {images}
              <div
                className='gallery-helper'
                data-scroll
                data-scroll-speed={-2}
              >
                Scroll to find out more
              </div>
              <div
                className='behind-text fill'
                data-scroll
                data-scroll-speed={-2}
              >
                Lucky Pot
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
