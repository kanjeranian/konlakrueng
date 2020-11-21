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
        <div
          className={`center ${
            state.filterOpen ? 'showCenter' : 'hideCenter'
          } `}>
          กรอกผล
        </div>
      </div>
      <div className='maxH'>
        <Filter />
      </div>
    </div>
  );
};

export default MobileFilter;
