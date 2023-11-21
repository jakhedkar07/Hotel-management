import React, { useState, useEffect } from 'react';
import './App.css';
import hotelsData from './hotelsData';
import getHotelActivities from './hotelActivities';
import getRecommendedHotels from './activitiesData';
import activitiesData from './src/activitiesData';
import DataDisplay from './DataDisplay';
const _activitiesData__WEBPACK_IMPORTED_MODULE_0__, = activitiesData;




const App = () => {
  const [hotels, setHotels] = useState(hotelsData);
  const [user, setUser] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [recommendedHotels, setRecommendedHotels] = useState([]);

  useEffect(() => {
    if (user) {
      setRecommendedHotels(getRecommendedHotels(user.id));
    }
  }, [user]);

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleLogin = () => {
    const userId = prompt('Enter your user ID:');
    if (userId) {
      setUser({ id: userId });
    }
  };

  const handleDraftBooking = () => {
    if (selectedHotel) {
      // Simulate creating a draft booking
      alert(`Draft booking created for hotel ${selectedHotel.name}`);
    }
  };

  const handleCompleteBooking = () => {
    if (selectedHotel) {
      // Simulate completing a booking
      alert(`Booking completed for hotel ${selectedHotel.name}`);
    }
  };

  return (
    <div className="App">
      <h1>Hotel Booking App</h1>

      {user ? (
        <>
          <h2>Welcome, {user.id}</h2>

          <div className="hotels">
            <h3>Hotels</h3>
            <ul>
              {hotels.map((hotel) => (
                <li key={hotel.id}>
                  <button onClick={() => handleHotelClick(hotel)}>
                    {hotel.name} ({hotel.location})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {selectedHotel && (
            <>
              <div className="hotel-details">
                <h3>Selected Hotel</h3>
                <p>Name: {selectedHotel.name}</p>
                <p>Location: {selectedHotel.location}</p>
                <p>Price: ${selectedHotel.price}</p>
                <button onClick={handleDraftBooking}>Create Draft Booking</button>
                <button onClick={handleCompleteBooking}>Complete Booking</button>
              </div>

              <div className="hotel-activities">
                <h3>Hotel Activities</h3>
                {getHotelActivities(selectedHotel.id).length > 0 ? (
                  getHotelActivities(selectedHotel.id).map((activity) => (
                    <p key={activity.id}>
                      {activity.type === 'visit' ? 'Visited' : 'Booked'} {activity.count} times
                    </p>
                  ))
                ) : (
                  <p>No activities yet</p>
                )}
              </div>
            </>
          )}
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {recommendedHotels.length > 0 && (
        <div className="recommended-hotels">
          <h3>Recommended Hotels</h3>
          <ul>
            {recommendedHotels.map((hotel) => (
              <li key={hotel.id}>
                <button onClick={() => handleHotelClick(hotel)}>
                  {hotel.name} ({hotel.location})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
 
  );
  <DataDisplay />
};

export default App;
