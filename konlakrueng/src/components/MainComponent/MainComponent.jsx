import React from 'react';
import logo from './../../img/halfhalf-logo.png';
import filter from './../../img/filter.png';
import logoMini from './../../img/halfhalf-logo-mini.png';
import { SearchOutlined } from '@ant-design/icons';
import './MainComponent.scss';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../../store.jsx';
// import style from './main.scss';

export const Main = () => {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    fetch('https://panjs.com/ywc18.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'UPDATE_DATA',
          payload: data,
        });
      });
  }, [dispatch]);

  const search = () => {
    alert('search!');
  };

  console.log(state);

  const onLocationChange = (event) => {
    dispatch({
      type: 'UPDATE_PROVINCE',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const onCategoryChange = (event) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const onPriceChange = (event) => {
    dispatch({
      type: 'UPDATE_PRICE',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  return (
    <div className='app'>
      <div className='whiteHeader contentContainer'>
        <div className='whiteHeaderLeft'>
          <a href='https://search-merchant.xn--42caj4e6bk1f5b1j.com/'>
            <img src={logo} className='logo' alt='logo' />
            <img src={logoMini} className='logoMini' alt='logo' />
          </a>
        </div>
        <form className='whiteHeaderRight' onSubmit={search}>
          <select
            className='location'
            name='locationTop'
            onChange={onLocationChange}
            value={state.province}>
            <option value='all'>All</option>
            <option value='nearme'>Near me</option>
            {state.data.provinces.map((province) => (
              <option value={province} key={province}>
                {province}
              </option>
            ))}
          </select>
          <input
            className='finderInput'
            type='search'
            autoComplete='off'
            maxLength='50'
            id='finderInput'
            name='finderInput'
            placeholder='ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป'
          />
          <button className='finderButton' type='submit'>
            <SearchOutlined />
          </button>
        </form>
        <img src={filter} className='filter' alt='filter' />
      </div>
      <div className='blueHeader contentContainer'>
        <a href='/'>หน้าแรก</a>
        <p>/</p>
        <a href='/'>ค้นหา</a>
      </div>
      <div className='body'>
        <div className='textSearchResult'>ผลการค้นหาสินค้าทั่วไปทั้งหมด</div>
        <div className='filterAndResults'>
          <div className='leftBox'>
            <div className='filterBox'>
              ประเภทร้านค้า
              <form onChange={onCategoryChange}>
                {state.data.categories.map((category) => (
                  <div key={category.name}>
                    <input type='radio' value={category.name} name='category' />
                    <label htmlFor={category.name}>{category.name}</label>
                  </div>
                ))}
              </form>
              จังหวัด/ใกล้ฉัน
              <form onChange={onLocationChange}>
                <select
                  className='location'
                  name='locationSide'
                  onChange={onLocationChange}
                  value={state.province}>
                  <option value='all'>All</option>
                  <option value='nearme'>Near me</option>
                  {state.data.provinces.map((province) => (
                    <option value={province} key={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </form>
              ช่วงราคาสินค้า (บาท)
              <select
                className='price'
                name='price'
                onChange={onPriceChange}
                value={state.priceRange}>
                <option value='all'>All</option>
                {state.data.priceRange.map((priceRange, index) => (
                  <option value={index + 1} key={index + 1}>
                    {priceRange}
                  </option>
                ))}
              </select>
              ประเภทร้านค้า
              <form onChange={onCategoryChange}>
                {state.data.categories.map((category) => (
                  <div key={category.name}>
                    <input type='radio' value={category.name} name='category' />
                    <label htmlFor={category.name}>{category.name}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
          <div className='rightBox'>rightBox</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
