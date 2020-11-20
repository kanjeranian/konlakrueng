import React from 'react';
import './WhiteHeaderComponent.scss';
import logo from './../../img/halfhalf-logo.png';
import filter from './../../img/filter.png';
import logoMini from './../../img/halfhalf-logo-mini.png';
import { SearchOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { StoreContext } from '../../store.jsx';

export const HeaderComponent = () => {
  const { state, dispatch } = useContext(StoreContext);
  const onLocationChange = (event) => {
    dispatch({
      type: 'UPDATE_PROVINCE',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const search = () => {
    alert('search!');
  };

  return (
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
  );
};

export default HeaderComponent;
