import React from 'react';
// import { useContext } from 'react';
// import { StoreContext } from '../../store.jsx';

export const BlueHeaderComponent = () => {
  // const { state, dispatch } = useContext(StoreContext);

  return (
    <div className='blueHeader contentContainer'>
      <a href='/'>หน้าแรก</a>
      <p>/</p>
      <a href='/'>ค้นหา</a>
    </div>
  );
};

export default BlueHeaderComponent;
