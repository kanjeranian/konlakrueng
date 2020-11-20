import React from 'react';
import './MerchantComponent.scss';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../../store.jsx';

export const MerchantComponent = () => {
  const { state, dispatch } = useContext(StoreContext);
  //   useEffect(() => {
  //     fetch('https://panjs.com/ywc18.json')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         dispatch({
  //           type: 'UPDATE_DATA',
  //           payload: data,
  //         });
  //       });
  //   }, [dispatch]);

  //   const search = () => {
  //     alert('search!');
  //   };

  //   console.log(state);

  //   const onLocationChange = (event) => {
  //     dispatch({
  //       type: 'UPDATE_PROVINCE',
  //       payload: event.target.value,
  //     });
  //     console.log(event.target.value);
  //   };

  return (
    <div className='merchantContainer'>
      <div className='merchantImg'></div>
      <div className='merchantDetail'></div>
    </div>
  );
};

export default MerchantComponent;
