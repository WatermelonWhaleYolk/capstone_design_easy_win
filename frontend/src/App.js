import "./App.css";
import Home from "./page/home/home.js";
import Wrapper from "./component/wrapper/wrapper";
import Header from "./component/header/header";
import Timetable from "./page/timetable/timetable.js";
import About_us from "./page/about_us/about_us.js";
import ExternalLinks from "./page/external_links/external_links.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/external_links" element={<ExternalLinks />} />
            <Route path="/about_us" element={<About_us/>} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
