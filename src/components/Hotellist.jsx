import React from 'react';
import Hotel from './Hotel';

const Hotellist = ({ hotels }) => {
  return (
    <ul>
      {hotels.map((hotel) => (
        <li key={hotel.id}>
          <Hotel hotel={hotel} />
        </li>
      ))}
    </ul>
  );
};

export default Hotellist;