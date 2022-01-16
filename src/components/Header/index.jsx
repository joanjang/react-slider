import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="main-nav">
          <FontAwesomeIcon icon={faBars} className="fa-bars" />
        </div>
        <ul className="menus">
          <li className="home">홈</li>
          <li>채용</li>
          <li>이벤트</li>
          <li>직원별 연봉</li>
          <li>이력서</li>
          <li>커뮤니티</li>
          <li>프리랜서</li>
          <li>AI 합격예측</li>
        </ul>
        <aside>
          <ul className="menus">
            <li>
              <FontAwesomeIcon icon={faSearch} className="fa-search" />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} className="far fa-bell" />
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} className="fa-user-circle" />
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default Header;
