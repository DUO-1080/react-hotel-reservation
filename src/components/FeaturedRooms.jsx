import React from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms, isLoading } = this.context;
    console.log(rooms);
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {isLoading ? <Loading /> : rooms.map((room) => <Room key={room.id} room={room} />)}
        </div>
      </section>
    );
  }
}
export default FeaturedRooms;
