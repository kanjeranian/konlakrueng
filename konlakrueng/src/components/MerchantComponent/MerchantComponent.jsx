import React from 'react';
import './MerchantComponent.scss';
import { useContext } from 'react';
import { StoreContext } from '../../store.jsx';

const Tag = (isOpen) => {
  return (
    <div className='tagContainer'>
      <span className='tag'>เปิดอยู่</span>
    </div>
  );
};
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
          <div className='merchantDetail'>
            <div className='cardHeader'>
              <div className='cardName'>{merchant.shopNameTH}</div>
              <Tag isOpen />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MerchantComponent;
