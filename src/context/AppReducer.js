export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_VALUE':
      const value =
        action.payload.type === 'checkbox'
          ? action.payload.checked
          : action.payload.value;
      const name = action.payload.name;
      return { ...state, [name]: value };

    case 'FILTER_ROOMS':
      const { apartments, rooms, floor, price, size, balcony } = state;
      let filteredApartments = [...apartments];

      // filter by rooms
      if (rooms !== '-') {
        filteredApartments = filteredApartments.filter(
          apartment => apartment.rooms === +rooms
        );
      }

      // filter by floor
      if (floor !== '-') {
        filteredApartments = filteredApartments.filter(
          apartment => apartment.floor === +floor
        );
      }

      // filter by price
      filteredApartments = filteredApartments.filter(
        apartment => apartment.price <= price
      );

      // filter by size
      filteredApartments = filteredApartments.filter(
        apartment => apartment.size <= size
      );

      // filter by balcony
      if (balcony) {
        filteredApartments = filteredApartments.filter(room => room.balcony);
      }

      return { ...state, filteredApartments };

    default:
      return state;
  }
};
