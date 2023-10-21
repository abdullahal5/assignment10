const Banner = () => {
    return (
      <div className="font-tilt dark:bg-black flex lg:flex-row md:flex-row px-5 flex-col justify-evenly bg-gray-200 items-center ">
        <div>
          <h1 className="text-6xl font-bold">
            Dive <br /> into the World <br /> of
            <span className="text-[#5000ca]"> Luxury cars</span>
          </h1>
        </div>
        <div>
          <img src="https://i.ibb.co/m896kfm/tire.png" alt="" />
        </div>
      </div>
    );
};

export default Banner;