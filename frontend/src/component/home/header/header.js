import './header.css'

export default function Header() {
  return (
      <nav className="header">
        <img src="../../../asset/kiumascot.png" className="header_logo" />
        <nav className="nav_bar">Go KIU</nav>
        <nav className="nav_bar">봉사기록 확인</nav>
        <nav className="nav_bar">ABOUT_US</nav>
        <nav className="nav_bar">
          <button className="login_btn">로그인</button>
          </nav>
      </nav>
  )
};