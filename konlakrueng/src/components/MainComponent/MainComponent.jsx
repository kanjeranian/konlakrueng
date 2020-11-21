import React from 'react';
import './MainComponent.scss';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../../store.jsx';
import MerchantComponent from '../MerchantComponent';
import SidebarComponent from '../SidebarComponent';
import WhiteHeaderComponent from '../WhiteHeaderComponent';
import BlueHeaderComponent from '../BlueHeaderComponent';
import MobileFilter from '../MobileFilter';

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

  console.log(state);

  return (
    <div className='outerContainer'>
      <MobileFilter isOpen={state.filterOpen} />
      <div className='background'></div>
      <div className='app'>
        <WhiteHeaderComponent />
        <BlueHeaderComponent />
        <div className='body'>
          <div className='textSearchResult'>ผลการค้นหาสินค้าทั่วไปทั้งหมด</div>
          <div className='filterAndResults'>
            <SidebarComponent />
            <div className='rightBoxx'>
              <MerchantComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
