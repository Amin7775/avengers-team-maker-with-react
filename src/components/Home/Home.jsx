/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  return (
    <div className="container">
      <div className="home-container">
        {/* Card */}
        <div className="card-container">
          {
            allActors.map(actor => <div key={actor.id} className="card">
            <div className="card-img">
              <img
                className="photo"
                src={actor.image}
                alt=""
              />
            </div>
            <h2>{actor.name} </h2>
            <p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, unde.
              </small>
            </p>
            <div className="info">
              <p>Salary : {actor.salary}</p>
              <p>Role: {actor.role} </p>
            </div>
            <button className="card-btn">Select</button>
          </div>)
          }
        </div>
        {/* Cart */}
        <div className="cart">
          <h1>This is cart</h1>
        </div>
      </div>
      <Cart></Cart>
    </div>
  );
};

export default Home;
