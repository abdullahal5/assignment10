import { useEffect, useState } from "react";

const Brand = () => {
    const [inform, setInform] = useState([])
    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setInform(data))
    },[])
    return (
      <div className="">
        <h1 className="text-5xl text-center my-7">
          Find your latest brand here
        </h1>
        <div className="flex justify-center">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {inform.map((data) => (
              <div key={data.id}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={data.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Brand;