import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav id="header">
      <div>
        <div className="header_logo">
          <Link to="/">
            <img src="../../asset/images/kiumascot.png" alt="header_logo" />
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/external_links">봉사활동 사이트</Link>
          </li>
          <li>
            <a
              href="https://www.kiu.ac.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              경일대학교 바로가기
            </a>
          </li>
          <li>About us</li>
          <li>For Lawyers</li>
          <li>For Plaintiffs</li>
        </ul>
      </div>
      <div>
        <button className="btn_1"></button>
      </div>
    </nav>
  );
}
