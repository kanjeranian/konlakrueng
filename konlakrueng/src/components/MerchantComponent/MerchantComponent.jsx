import React from 'react';
import './MerchantComponent.scss';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../../store.jsx';

export const MerchantComponent = () => {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <div className='rightBox'>
      {state.data.merchants.map((merchant) => (
        <div className='merchantContainer'>
          <div className='merchantImg'></div>
          <div className='merchantDetail'>{merchant.shopNameTH}</div>
        </div>
      ))}
    </div>
  );
};

export default MerchantComponent;
