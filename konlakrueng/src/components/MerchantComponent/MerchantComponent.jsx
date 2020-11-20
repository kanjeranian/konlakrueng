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

const PriceLevel = ({ level }) => {
  const bold = '฿'.repeat(level);
  const normal = '฿'.repeat(4 - level);
  console.log(level);
  return (
    <>
      <span className='moneyDark '>{bold}</span>
      <span className='moneyLight'>{normal}</span>
    </>
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
            <div className='cardSubHeader'>
              <div>{merchant.subcategoryName}</div> <div className='sep'>|</div>
              <div>
                <PriceLevel level={merchant.priceLevel} />
              </div>
              <div className='sep'>|</div>
              <div>
                {merchant.addressDistrictName} {merchant.addressProvinceName}
              </div>
            </div>
            <div className='br' />
            <span>highlight text</span>
            <span>เมนูแนะนำ? && เมนูแนะนำ</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MerchantComponent;
