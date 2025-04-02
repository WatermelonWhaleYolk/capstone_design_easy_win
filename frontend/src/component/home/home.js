import Header from "./header/header.js";
import Body from "../body/body.js"
import './home.css'

export default function Home() {
  return (
    <div className="home_wrapper">
      <div className="main_content">
      <Header />
      <Body />
      </div>
    </div>
  )
}