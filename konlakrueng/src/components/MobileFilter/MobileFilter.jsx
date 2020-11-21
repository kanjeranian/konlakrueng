import React, { useContext } from 'react';
import './MobileFilter.scss';
import Filter from '../Filter';
import { StoreContext } from '../../store.jsx';
export const MobileFilter = ({ isOpen }) => {
  const { state, dispatch } = useContext(StoreContext);

  const onBackButtonClicked = (event) => {
    dispatch({
      type: 'TOGGLE_FILTER',
    });
  };

  return (
    <div className={`mobileFilterContainer ${isOpen ? 'open' : ''}`}>
      <div className='blueHeaderForMobile'>
        <div onClick={onBackButtonClicked} className='left'>
          &lt;
        </div>
        <div className='center'>กรอกผล</div>
      </div>
      <Filter />
    </div>
  );
};

export default MobileFilter;
