import React from 'react';

const Hotel = ({ hotel }) => {
  return (
    <div>
      <h3>{hotel.name}</h3>
      <p>Location: {hotel.location}</p>
      <p>Price: ${hotel.price}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Amenities: {hotel.amenities.join(', ')}</p>
    </div>
  );
};

export default Hotel;