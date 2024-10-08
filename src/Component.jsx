import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from './redux/reducers';

const MyComponent = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const handleUpdate = (newData) => {
    dispatch(setData(newData)); //
  };

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => handleUpdate('New data')}>Update</button>
    </div>
  )
}

export default MyComponent;
