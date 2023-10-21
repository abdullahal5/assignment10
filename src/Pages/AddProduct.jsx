import { useState } from "react";
import Swal from "sweetalert2";
const AddProduct = () => {
  const handleManage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const brandName = e.target.brandName.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const options = e.target.options.value;
    const add = {
      name,
      price,
      rating,
      brandName,
      description,
      photo,
      options,
    };
    console.log(add);
    fetch("https://assignment10-server-peach.vercel.app/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "couple",
    "sedan",
    "SUV",
    "Station-wagon",
    "Sports car",
    "crossover",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div>
      <div className="px-5 dark:bg-black ">
        <form onSubmit={handleManage}>
          <div className="flex lg:flex-row md:flex-row flex-col ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full bg-gray-300"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  name="brandName"
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full bg-gray-300"
                />
              </label>
            </div>
          </div>
          <div className="pt-10">
            <div className="relative">
              <label className="label">
                <span className="label-text dark:text-white">Types</span>
              </label>
              <input
                required
                name="options"
                type="text"
                placeholder="Click me for options"
                value={selectedOption}
                onClick={() => setShowOptions(!showOptions)}
                className="w-64 px-4 py-2 border bg-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              />

              {showOptions && (
                <div className="absolute z-10 mt-2 w-64 border border-gray-300 bg-white rounded">
                  {options.map((option, index) => (
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

          <div className="flex g:flex-row md:flex-row flex-col">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Price</span>
              </label>
              <label className="input-group">
                <input
                  required
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered w-full bg-gray-300"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">
                  Short description
                </span>
              </label>
              <label className="input-group">
                <input
                  required
                  name="description"
                  type="text"
                  placeholder="short Description"
                  className="input input-bordered w-full bg-gray-300"
                />
              </label>
            </div>
          </div>
          <div className="form-control ">
            <label className="label dark:text-white">Rating</label>
            <label className="input-group">
              <input
                required
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label dark:text-white">Photo URL</label>
            <label className="input-group">
              <input
                required
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-gray-300"
              />
            </label>
          </div>

          <div className="mt-10">
            <button className="btn btn-primary w-full" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
