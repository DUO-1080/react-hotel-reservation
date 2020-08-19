import React from "react";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends React.Component {
  state = {
    services: [
      {
        title: "free cocktails",
        icon: <FaCocktail />,
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, delectus excepturi eaque, corrupti eos saepe aut et assumenda natus accusantium ex fugit atque iste reprehenderit quas officia libero! Adipisci, vel?",
      },
      {
        title: "endless hiking",
        icon: <FaHiking />,
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, delectus excepturi eaque, corrupti eos saepe aut et assumenda natus accusantium ex fugit atque iste reprehenderit quas officia libero! Adipisci, vel?",
      },
      {
        title: "free shuttle",
        icon: <FaShuttleVan />,
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, delectus excepturi eaque, corrupti eos saepe aut et assumenda natus accusantium ex fugit atque iste reprehenderit quas officia libero! Adipisci, vel?",
      },
      {
        title: "free Beer",
        icon: <FaBeer />,
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, delectus excepturi eaque, corrupti eos saepe aut et assumenda natus accusantium ex fugit atque iste reprehenderit quas officia libero! Adipisci, vel?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service) => (
            <article className="service" key={service.title}>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p> {service.info} </p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
