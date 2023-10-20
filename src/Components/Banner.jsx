const Banner = () => {
    return (
      <div className="font-tilt flex lg:flex-row md:flex-row px-5 flex-col justify-evenly bg-gray-200 items-center dark:text-gray-100 dark:bg-slate-900 duration-100">
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