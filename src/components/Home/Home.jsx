/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
    const [selectedActors,setSelectedActors]=useState([]);
    const [remaining,setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);


  const handleSelectActor= (actor) =>{
    const isExist = selectedActors.find((item)=> item.id==actor.id);

    let count = actor.salary;
    if(isExist){
      return alert('Already booked')
    }else{
      selectedActors.forEach(item => {
        count=count+item.salary;
      })

      const totalRemaining = 30000-count;
      if(count>30000){
        return alert("Out Of Budget")
      }
      setTotalCost(count);
      setRemaining(totalRemaining);

      const newActor=[...selectedActors,actor]
      setSelectedActors(newActor);
    }
  }

  console.log(selectedActors)

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
              <p>Salary : {actor.salary}$</p>
              <p>Role: {actor.role} </p>
            </div>
            <button onClick={()=> handleSelectActor(actor)} className="card-btn">Select</button>
          </div>)
          }
        </div>
        {/* Cart */}
        <div className="cart">
          <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
