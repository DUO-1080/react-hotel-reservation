import React from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../context";
import Banner from "../components/Banner";
import HeroStyled from "../components/HeroStyle";

class SingleRoom extends React.Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.room,
    };
  }

  render() {
    const { getRoomDetail } = this.context;

    const room = getRoomDetail(this.state.slug);
    if (!room.slug) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const { name, price, size, capacity, pets, breakfast, description, extras, images } = room;

    const [mainImage, ...restImage] = images;

    return (
      <>
        <HeroStyled image={mainImage}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </HeroStyled>
        <section className="single-room">
          <div className="single-room-images">
            {restImage.map((image, index) => (
              <img src={image} alt={name} key={index} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}</h6>
              <h6> max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
              <h6> {pets ? "pets allowed" : "np pets allowed"} </h6>
              <h6> {breakfast && "free breakfast included"} </h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => (
              <li key={index}>- {extra}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
