import "./style.scss";
import { points } from "../../data";
import { useRef, useEffect, useState } from "react";
import useIntersect from "../../hooks/useIntersect";
import gsap from "gsap";

function GalleryItem({ src, index }) {
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const imageRef = useRef(null);

  const isOnScreen = useIntersect(ref);

  useEffect(() => {
    if (isOnScreen) {
      setReveal(true);
    }
  }, [isOnScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.set(imageRef.current, { opacity: 1, xPercent: -100 });
      gsap.to(imageRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "Power3.easeOut",
        delay: 0.5,
      });
    }
  }, [reveal]);

  // useEffect(() => {
  //   if (reveal) {
  //     imageRef.current.classList.add("reveal");
  //   }
  // }, [reveal]);

  const gridPosition = points[index];
  if (!gridPosition) return null;

  const [row, column, spanRow, spanColumn] = gridPosition;

  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return -0;
    return 1;
  };

  return (
    <div
      className='gallery-item'
      ref={ref}
      data-scroll
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row} / ${column} / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className='gallery-item-image-wrapper'>
        {/* <div className='gallery-item-image' ref={imageRef}>
          <img src={src} alt={`Lucky Pot - ${index}`} />
        </div> */}
        <div
          className='gallery-item-image'
          ref={imageRef}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default GalleryItem;
