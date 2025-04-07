import './App.css';
import Home from './component/home/home';
import AboutUs from './component/AboutUs/AboutUs.js'; // AboutUs 컴포넌트 import
import Header from './component/home/header/header.js';// header 컴포넌트 import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/* <BroswerRoute>
<Routes>
<Route path='' element={<# />}/>
<Route path='' element={<# />}/>
<Route path='' element={<# />}/>
<Route path='' element={<# />}/>
</Routes>
</BroswerRoute> */