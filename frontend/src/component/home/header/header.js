import "./header.css";
import { Link } from "react-router-dom"; // Link 컴포넌트 import

export default function Header() {
  return (
    <nav id="header">
      <div>
        <img src="/asset/kiumascot.png" alt="kiumascot" />
      </div>
      <div>
        <ul>
          <li>Our services</li>
          <li>Our focus</li>
          <li>
            <Link to="/about-us">About us</Link> {/* Link 컴포넌트로 감싸기 */}
          </li>
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