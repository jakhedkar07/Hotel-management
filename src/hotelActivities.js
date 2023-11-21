import activitiesData from "./activitiesData";

const getHotelActivities = (hotelId) => {
    return activitiesData.filter((activity) => activity.hotelId === hotelId);
  };
  
  const renderHotelActivities = (hotelActivities) => {
    if (hotelActivities.length === 0) {
      return <div>No activities yet</div>;
    }
  
    return (
      <ul>
        {hotelActivities.map((activity) => (
          <li key={activity.id}>
            {activity.type === 'visit' ? 'Visited' : 'Booked'} {activity.count} times
          </li>
        ))}
      </ul>
    );

  };
  export default getHotelActivities;
 
  