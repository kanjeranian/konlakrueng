import React from 'react';
import './BlueHeaderComponent.scss';
export const BlueHeaderComponent = () => {
  // const { state, dispatch } = useContext(StoreContext);

  return (
    <div className='blueHeader2'>
      <div className='blueHeader contentContainer'>
        <a className='linkLine' href='/'>
          หน้าแรก
        </a>
        <p className='hasSpace'> / </p>
        <a className='linkLine' href='/'>
          ค้นหา
        </a>
      </div>
    </div>
  );
};

export default BlueHeaderComponent;
