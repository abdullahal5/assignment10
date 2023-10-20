/* eslint-disable react-hooks/rules-of-hooks */
import {  useLoaderData } from "react-router-dom";
import Star from "./Star";
import Swal from "sweetalert2";
import { useState } from "react";

const CarDetails = () => {
    // const [car, setCar] = useState([]);
    // const { id } = useParams();
    // const [api, setApi] = useState({})
    // console.log(car);
    const loadedData = useLoaderData();
    // console.log(loadedData)
    const {brandName, description, name, options, photo, price, rating } = loadedData

    const handleSubmit =() =>{
      const loadedData = {
        brandName,
        description,
        name,
        options,
        photo,
        price,
        rating,
      };
      console.log(loadedData)
      fetch("http://localhost:4000/info", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loadedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire("Good job!", "You added the car in cart section!", "success");
          
    })
    }

    return (
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[url('https://i.ibb.co/9sXPcVr/vintage-car-road-motion-blur-with-speed-motion-effect-743855-40785.png')] h-[150vh] md:h-[100vh] lg:h-[100vh]"
      >
        <div className="bg-[#0b0b0b7d] h-[100%] ">
        <h1 className="text-4xl font-bold text-center py-5 text-white">Details</h1>
          <div className="flex flex-col md:flex-row lg:flex-row justify-evenly ">
            <div>
              <img className="mx-auto" src={photo} alt="" />
            </div>
            <div className="space-y-6 text-white px-5">
              <h1 className="text-xl">Brand: {brandName}</h1>
              <h1 className="text-4xl font-bold">Name: {name}</h1>
              <h2 className="text-3xl">Description: {description}</h2>
              <p className="flex items-center text-xl">
                Reviews: <Star star={rating}></Star>
              </p>
              <p className="text-xl">Price: ${price}</p>
              <p className="text-xl">Type: {options}</p>
              <button onClick={handleSubmit} className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CarDetails;