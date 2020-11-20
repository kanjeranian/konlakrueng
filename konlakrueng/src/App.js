import logo from './img/halfhalf-logo.png'
import logoMini from './img/halfhalf-logo-mini.png'
import {SearchOutlined} from '@ant-design/icons'
import './App.scss';
// import 'antd/dist/antd.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="whiteHeaderRight">
          <div className="location">location</div>
          <div className="finderInput">finderInput</div>
          <div className="finderButton"><SearchOutlined /></div>
        </div>
      </div>
      <div className="blueHeader">
        <a href="/">หน้าแรก</a>
        <p>/</p>
        <a href="/">ค้นหา</a>
      </div>
      <div className="body">
        <div className="textSearchResult">ผลการค้นหาสินค้าทั่วไปทั้งหมดห</div>
        <div className="filterAndResults">
          <div className="leftBox">leftBox</div>
          <div className="rightBox">rightBox</div>
        </div>
      </div>
    </div>
  );
}

export default App;
