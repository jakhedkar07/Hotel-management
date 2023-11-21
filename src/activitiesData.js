import hotelsData from './hotelsData';
const activitiesData = [
    {
      id: 1,
      hotelId: 1,
      userId: 1,
      type: 'visit',
      count: 10,
    },
    {
      id: 2,
      hotelId: 1,
      userId: 1,
      type: 'draft_booking',
      count: 5,
    },
    {
      id: 3,
      hotelId: 2,
      userId: 2,
      type: 'visit',
      count: 8,
    },
    {
      id: 4,
      hotelId: 3,
      userId: 3,
      type: 'completed_booking',
      count: 2,
    },
  ];
  
  const getUserActivities = (userId) => {
    return activitiesData.filter((activity) => activity.userId === userId);
  };
  
  const getRecommendedHotels = (userId) => {
    const userActivities = getUserActivities(userId);
    const recommendedHotelIds = [];
  
    for (const activity of userActivities) {
      if (activity.type === 'visit' && activity.count > 2) {
        recommendedHotelIds.push(activity.hotelId);
      }
  
      if (activity.type === 'draft_booking') {
        recommendedHotelIds.push(activity.hotelId);
      }
    }
  
    return recommendedHotelIds.map((hotelId) => hotelsData.find((hotel) => hotel.id === hotelId));
  };

  export default getRecommendedHotels;