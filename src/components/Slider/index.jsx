import "./index.scss";

import banners from "./meta";
import { useState, useLayoutEffect, useEffect, useCallback } from "react";

import MoveButton from "../MoveButton";
import Description from "./Description";

const BASE_BANNER_PATH = `${process.env.PUBLIC_URL}/assets/banner/`;
const Slider = () => {
  const offset = 3;
  const [slideIndex, setSlideIndex] = useState(0);
  const [slider, setSlider] = useState([]);
  const lastSlideIndex = banners.length - 1;
  const isFirstIndex = useCallback(() => slideIndex === 0, [slideIndex]);
  const isLastIndex = useCallback(
    () => slideIndex === lastSlideIndex,
    [slideIndex, lastSlideIndex]
  );

  const moveSlider = useCallback(
    (isLeft) => {
      setSlideIndex((prev) =>
        isLeft
          ? isFirstIndex()
            ? lastSlideIndex
            : prev - 1
          : isLastIndex()
          ? 0
          : prev + 1
      );
    },
    [isFirstIndex, isLastIndex, lastSlideIndex]
  );

  useLayoutEffect(() => {
    if (isFirstIndex())
      return setSlider([
        ...banners.slice(lastSlideIndex),
        ...banners.slice(slideIndex, 2),
      ]);
    if (isLastIndex())
      return setSlider([
        ...banners.slice(slideIndex - 1, slideIndex + 1),
        ...banners.slice(0, 1),
      ]);
    return setSlider(banners.slice(slideIndex - 1, offset + slideIndex - 1));
  }, [slideIndex, isFirstIndex, isLastIndex, lastSlideIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      moveSlider(false);
    }, 1000 * 4);

    return () => clearInterval(timer);
  }, [moveSlider]);

  return (
    <div className="slider-container">
      {slider.map(({ filename, title, desc }, idx) => (
        <div key={idx} className={`slider-banner${idx === 1 ? " main" : ""}`}>
          <img src={`${BASE_BANNER_PATH}${filename}`} alt={title} />
          {idx === 1 && <Description title={title} desc={desc} />}
        </div>
      ))}
      <MoveButton direction="left" onClick={moveSlider} />
      <MoveButton direction="right" onClick={moveSlider} />
    </div>
  );
};

export default Slider;
