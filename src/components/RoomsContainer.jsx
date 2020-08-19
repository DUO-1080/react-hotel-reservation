import React from "react";

import { RoomContext } from "../context";

import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

class RoomsContainer extends React.Component {
  static contextType = RoomContext;

  render() {
    const { isLoading, rooms, sortedRooms } = this.context;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );
  }
}

export default RoomsContainer;
