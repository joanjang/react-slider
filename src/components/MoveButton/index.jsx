import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ direction, onClick }) => {
  const isLeft = () => direction === "left";
  return (
    <div
      className={`move-button-container ${direction}`}
      onClick={() => onClick(isLeft())}
    >
      <FontAwesomeIcon
        icon={isLeft() ? faChevronLeft : faChevronRight}
        className="fa-bars"
      />
    </div>
  );
};

export default Slider;
