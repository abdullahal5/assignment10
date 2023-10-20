import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const car = useLoaderData()
    console.log(car)
    const {_id, name, brandName , options, photo, price, rating, description}   = car
    const handleManage =(e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        const brandName = e.target.brandName.value
        const description = e.target.description.value
        const photo = e.target.photo.value
        const option = e.target.options.value
        const add = {
          name, price, rating, brandName, description, photo, option
        }
        // console.log(add)
        fetch(`http://localhost:4000/car/${_id}`,{
            method: "PUT",
            headers:{ 'content-type': 'application/json'},
            body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'car Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
        
    }

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options1 = ["couple", "sedan", "SUV", "Station-wagon", "Sports car", "crossover"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);

  }
    return (
      <div>
        <h1 className="text-4xl font-bold text-center"> Update Car</h1>
        <div>
          <form onSubmit={handleManage}>
            <div className="flex">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                  defaultValue={name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                  defaultValue={brandName}
                    name="brandName"
                    type="text"
                    placeholder="Brand Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="pt-10">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Types</span>
                </label>
                <input
                defaultValue={options}
                  name="options"
                  type="text"
                  placeholder="Click me for options"
                  value={selectedOption}
                  onClick={() => setShowOptions(!showOptions)}
                  className="w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                />

                {showOptions && (
                  <div className="absolute z-10 mt-2 w-64 border border-gray-300 bg-white rounded">
                    {options1.map((option, index) => (
                      <div
                        key={index}
                        className="p-2 cursor-pointer hover:bg-blue-100"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input
                  defaultValue={price}
                    name="price"
                    type="text"
                    placeholder="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <label className="input-group">
                  <input
                  defaultValue={description}
                    name="description"
                    type="text"
                    placeholder="short Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="form-control ">
              <label className="label">Rating</label>
              <label className="input-group">
                <input
                defaultValue={rating}
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">Photo URL</label>
              <label className="input-group">
                <input
                defaultValue={photo}
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="mt-10">
              <button className="btn btn-primary w-full" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Update;