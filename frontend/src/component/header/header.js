import "./header.css";
import { Link }from 'react-router-dom'
export default function Header() {
  return (
    <nav id="header">
      <div>
          <div className="header_logo"></div>
      </div>
      <div>
        <ul>
          <li><Link to="/external_links">봉사활동 사이트</Link></li>
          <li>경일대학교 바로가기</li>
          <li>About us</li>
          <li>For Lawyers</li>
          <li>For Plaintiffs</li>
        </ul>
      </div>
      <div>
        <button className="btn_1">Get Funded</button>
      </div>
    </nav>
  );
}
