import "./header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (

    <nav id="header">
      <div>
          <img src="/asset/kiumascot.png" />
      </div>
      <div>
        <ul>
          <li>Our services</li>
          <li>Our focus</li>
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
