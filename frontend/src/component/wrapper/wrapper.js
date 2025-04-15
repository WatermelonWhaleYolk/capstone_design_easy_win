
import './wrapper.css'

export default function Wrapper({children}) {
  return(
  <div className="home_wrapper">
    <div className="main_content">
      {children}
    </div>
  </div>
  );
};