import React from 'react';
import './MerchantComponent.scss';
import { useContext } from 'react';
import { StoreContext } from '../../store.jsx';

export const MerchantComponent = () => {
  const { state } = useContext(StoreContext);
  return (
    <div className='rightBox'>
      {state.data.merchants.map((merchant) => (
        <div className='merchantContainer'>
          <div className='imgContainer'>
            <img
              className='merchantImg'
              src={merchant.coverImageId}
              alt='merchant'
            />
          </div>
          <div className='merchantDetail'>{merchant.shopNameTH}</div>
        </div>
      ))}
    </div>
  );
};

export default MerchantComponent;
