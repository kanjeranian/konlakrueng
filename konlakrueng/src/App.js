import logo from './img/halfhalf-logo.png'
import logoMini from './img/halfhalf-logo-mini.png'
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="whiteHeader contentContainer">
        <div className="whiteHeaderLeft">
          <a href="https://search-merchant.xn--42caj4e6bk1f5b1j.com/">
            <img src={logo} className="logo" alt="logo" />
            <img src={logoMini} className="logoMini" alt="logo" />
          </a>
        </div>
        <div className="whiteHeaderRight">whiteHeaderRight</div>
      </div>
      <div className="blueHeader">blueHeader</div>
      <div className="body">
        <div className="textSearchResult">textSearchResult</div>
        <div className="leftBox">leftBox</div>
        <div className="rightBox">rightBox</div>
      </div>
    </div>
  );
}

export default App;
