import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Star from './Star';

const Details = () => {
    const [car, setCar] = useState([])
    const {id} = useParams()
    // const [api, setApi] = useState({})
    // console.log(car);
    const loadedData = useLoaderData();

    

    useEffect(()=>{
       fetch('/data.json')
       .then(res => res.json())
       .then(data => {
        console.log(data)

           const findCar = data?.find((item) => parseFloat(item.id) === parseFloat(id));
              console.log(findCar.brandName)
               const find = loadedData?.filter((item) => item.brandName === (findCar.brandName));
               setCar(find);
       })
    },[])

    // const name = api.find((item) => item.brandName);
    // console.log(name)
    // const find = api.find(i => console.log(i))
    // console.log(find)

    return (
      <div>
        <div>
          <div className="carousel w-full h-[90vh]">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/kBkXy4s/white-offroader-jeep-parking-114579-4007.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/NZZJp4W/yellow-sport-car-with-black-autotuning-road-114579-5051.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/HrxCB8J/black-sport-car-highway-drive-sunset-114579-5064.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Latest car</h1>
        </div>
        <div className="flex justify-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {car.map((i) => (
              <div key={i.id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src={i.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Brand Name: {i.brandName}</h2>
                    <h2 className="text-lg ">Name: {i.name}</h2>
                    <p>Description: {i.description}</p>
                    <div className=" ">
                      <div className="text-lg block ">Type: {i.options}</div>
                    </div>
                    <div className="block text-lg">Price: {i.price}</div>
                    <Star star={i.rating}></Star>
                    <div className="flex justify-evenly">
                      <Link to={`/carDetails/${i._id}`}>
                        <button className="btn btn-primary">Details</button>
                      </Link>
                      <Link to={`/update/${i._id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Details;