import React from "react";

import allRooms, { roomTypes, capacity as roomCapacity } from "../data";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    isLoading: true,
    //filter data
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    const rooms = this.formatData(allRooms);
    const featuredRooms = rooms.filter((room) => room.featured);
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    const maxSize = Math.max(...rooms.map((room) => room.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      isLoading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(allRooms) {
    return allRooms.map((room) => {
      const id = room.sys.id;
      const images = room.fields.images.map((image) => image.fields.file.url);
      return { id, ...room.fields, images };
    });
  }

  getRoomDetail = (slug) => {
    const room = this.state.rooms.find((room) => room.slug === slug);
    return { ...room };
  };

  handleFilterChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    const { rooms, type, capacity, maxPrice, price, minSize, maxSize, breakfast, pets } = this.state;

    let tempRooms = [...rooms];

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= parseInt(capacity));
    }
    if (price !== maxPrice) {
      tempRooms = tempRooms.filter((room) => room.price <= price);
    }

    tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

    if (breakfast) tempRooms = tempRooms.filter((room) => room.breakfast);

    if (pets) tempRooms = tempRooms.filter((room) => room.pets);

    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoomDetail: this.getRoomDetail,
          handleFilterChange: this.handleFilterChange,
          roomTypes,
          roomCapacity,
        }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
