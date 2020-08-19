import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms }) => {
  return (
    <>
      {!rooms.length ? (
        <div className="empty-search">
          <h3>unfortunately no rooms matched your search parameters</h3>
        </div>
      ) : (
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map((room) => (
              <Room key={room.id} room={room} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default RoomsList;
