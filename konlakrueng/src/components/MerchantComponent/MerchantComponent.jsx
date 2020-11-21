import React from 'react';
import './MerchantComponent.scss';
import { useContext } from 'react';
import { StoreContext } from '../../store.jsx';
// import logo from './../../img/halfhalf-logo.png';
import Alcohol from './../../img/จำหน่ายเครื่องดื่มแอลกอฮอล์.png';
import Music from './../../img/ดนตรีสด.png';
import Car from './../../img/ที่จอดรถ.png';
import Delivery from './../../img/บริการจัดส่งอาหาร.png';
import Reserve from './../../img/รับจองล่วงหน้า.png';
import Pet from './../../img/สามารถนำสัตว์เลี้ยงเข้าได้.png';
import sanitizeHtml from 'sanitize-html';

const Tag = ({ isOpen }) => {
  return (
    <div className='tagContainer'>
      {isOpen === 'Y' && <span className='tag'>เปิดอยู่</span>}
      {isOpen === 'N' && <span className='tag2'>ปิดแล้ว</span>}
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

const Facility = ({ facility }) => {
  const facilityObj = {
    จำหน่ายเครื่องดื่มแอลกอฮอล์: Alcohol,
    ดนตรีสด: Music,
    ที่จอดรถ: Car,
    บริการจัดส่งอาหาร: Delivery,
    รับจองล่วงหน้า: Reserve,
    สามารถนำสัตว์เลี้ยงเข้าได้: Pet,
  };
  return (
    <div className='circleDiv'>
      <img src={facilityObj[facility]} alt={facility} />
    </div>
  );
};

export const MerchantComponent = () => {
  const { state } = useContext(StoreContext);

  return (
    <div>
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
                <Tag isOpen={merchant.isOpen} />
              </div>
              <div className='f14grey cardSubHeader'>
                <div>{merchant.subcategoryName}</div>{' '}
                <div className='sep'>|</div>
                <div>
                  <PriceLevel level={merchant.priceLevel} />
                </div>
                <div className='sep'>|</div>
                <div>
                  {merchant.addressDistrictName} {merchant.addressProvinceName}
                </div>
              </div>
              <div className='br' />
              <div className='f14grey'>
                {merchant.highlightText && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(merchant.highlightText),
                    }}></div>
                )}
              </div>
              {console.log(merchant.recommendedItems)}
              {merchant.recommendedItems && (
                <div className='suggestMenu'>
                  <span className='f14'>เมนูแนะนำ: </span>
                  {merchant.recommendedItems.map((m, index) => (
                    <>
                      {index !== 0 && <span>, </span>}
                      <span className='f14grey'>{m}</span>
                    </>
                  ))}
                </div>
              )}
              {merchant.facilities && (
                <div className='facilityContainer'>
                  {merchant.facilities.map((m) => (
                    <>
                      <Facility facility={m} />
                    </>
                  ))}
                </div>
              )}
              {console.log(merchant.facilities)}
            </div>
          </div>
        ))}
      </div>

      <div className='rightBox2'>
        {state.data.merchants.map((merchant) => (
          <div className='merchantContainer'>
            <div
              className='imgContainer'
              style={{
                backgroundImage: `url('${merchant.coverImageId}')`,
                backgroundPosition: 'center center',
              }}>
              "
              {/* <img
                className='merchantImg'
                src={merchant.coverImageId}
                alt='merchant'
              /> */}
            </div>
            <div className='merchantDetail'>
              <div className='cardHeader'>
                <div className='cardName'>{merchant.shopNameTH}</div>
                <Tag isOpen={merchant.isOpen} />
              </div>
              <div className='f14grey cardSubHeader'>
                <div>{merchant.subcategoryName}</div>{' '}
                <div className='sep'>|</div>
                <div>
                  <PriceLevel level={merchant.priceLevel} />
                </div>
                <div className='sep'>|</div>
                <div>
                  {merchant.addressDistrictName} {merchant.addressProvinceName}
                </div>
              </div>
              <div className='br' />
              <div className='f14grey'>
                {merchant.highlightText && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(merchant.highlightText),
                    }}></div>
                )}
              </div>
              {console.log(merchant.recommendedItems)}
              {merchant.recommendedItems && (
                <div className='suggestMenu'>
                  <span className='f14'>เมนูแนะนำ: </span>
                  {merchant.recommendedItems.map((m, index) => (
                    <>
                      {index !== 0 && <span>, </span>}
                      <span className='f14grey'>{m}</span>
                    </>
                  ))}
                </div>
              )}
              {merchant.facilities && (
                <div className='facilityContainer'>
                  {merchant.facilities.map((m) => (
                    <>
                      <Facility facility={m} />
                    </>
                  ))}
                </div>
              )}
              {console.log(merchant.facilities)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantComponent;
