import Header from "./header/header";
import Auto_slider from "./auto_slider/auto_slider.js";
import './home.css'

export default function Home() {
  return (
    <div className="home_wrapper">
      <Header />
      <Auto_slider />
    </div>
  )
}