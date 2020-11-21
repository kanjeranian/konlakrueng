import React from 'react';
import './Filter.scss';
import { useContext } from 'react';
import { StoreContext } from '../../store.jsx';

export const SidebarComponent = () => {
  const { state, dispatch } = useContext(StoreContext);
  const onLocationChange = (event) => {
    dispatch({
      type: 'UPDATE_PROVINCE',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const onCategoryChange = (event) => {
    dispatch({
      type: 'UPDATE_CATEGORY',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const onSubCategoryChange = (event) => {
    dispatch({
      type: 'UPDATE_SELECTED_SUB_CATEGORY',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const onPriceChange = (event) => {
    dispatch({
      type: 'UPDATE_PRICE',
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  return (
    <div className='filterComponent'>
      ประเภทร้านค้า
      <form onChange={onCategoryChange}>
        {state.data.categories.map((category) => (
          <div key={category.name}>
            <input
              type='radio'
              value={category.name}
              name='category'
              checked={state.category === category.name}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
      </form>
      จังหวัด/ใกล้ฉัน
      <form onChange={onLocationChange}>
        <select
          className='location'
          name='locationSide'
          onChange={onLocationChange}
          value={state.province}>
          <option value='all'>พื้นที่ทั้งหมด</option>
          <option value='nearme'>พื้นที่ใกล้ฉัน</option>
          {state.data.provinces.map((province) => (
            <option value={province} key={province}>
              {province}
            </option>
          ))}
        </select>
      </form>
      ช่วงราคาสินค้า (บาท)
      <select
        className='price'
        name='price'
        onChange={onPriceChange}
        value={state.priceRange}>
        <option value='all'>All</option>
        {state.data.priceRange.map((priceRange, index) => (
          <option value={index + 1} key={index + 1}>
            {priceRange}
          </option>
        ))}
      </select>
      {state.subCategories.subcategories?.length > 0 && (
        <>
          <p>ประเภทร้านค้า {state.category}</p>
          <form onChange={onSubCategoryChange}>
            {state.subCategories.subcategories &&
              state.subCategories.subcategories.map((category) => (
                <div key={category}>
                  <input
                    type='radio'
                    value={category}
                    name='category'
                    checked={state.selectedSubCategory === category}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
          </form>
        </>
      )}
    </div>
  );
};

export default SidebarComponent;
