const OtherSection = () => {
    return (
      <div className="my-5">
        <h1 className="text-3xl text-center font-bold pb-5">About us</h1>
        <p className="text-center text-lg pb-5">
          Welcome to Your Ultimate Destination for Everything Automotive!
        </p>
        <div
          style={{
            backgroundImage:
              'url("https://i.ibb.co/XXrwmCB/front-part-car-female-customer-modern-stylish-bearded-businessman-automobile-saloon-146671-16015.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex lg:flex-row md:flex-row flex-col justify-center  h-[150vh] md:lg:h-[100vh] lg:h-[100vh] w-[100%] "
        >
          <div className="flex lg:flex-row md:flex-row flex-col justify-center px-10 dark:bg-black bg-[#0b0b0b80] h-[100%] w-full items-center">
            <div className=" text-lg text-white flex-1">
              we're passionate about all things cars. Our journey began with a
              shared love for automobiles and a desire to create a space where
              fellow car enthusiasts, buyers, and sellers can come together to
              explore, learn, and connect. We are a dedicated team of car
              enthusiasts, professionals, and experts who have a deep-rooted
              appreciation for the automotive world. Our collective experience
              spans decades in various aspects of the car industry, from sales
              and services to design and technology. We've come together to
              provide you with a comprehensive platform that caters to all your
              automotive needs.
            </div>
            <div className="">
              <img
                className="w-52 md:w-auto lg:w-auto"
                src="https://i.ibb.co/vjC6TPd/gear.png"
                alt="flex-1"
              />
            </div>
          </div>
        </div>
        <div className="bg-rose-200 dark:bg-black  py-5">
          <h1 className="text-3xl text-center py-5">
            Let's make a <span className="text-red-500">HOT</span> deal
          </h1>
          <div className="flex lg:flex-row flex-col md:flex-row gap-7 justify-center items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl">
                Select your car <br /> and get october offer
              </h1>
              <p className="text-lg py-3  text-center">get 20% discount</p>
            </div>
            <div>
              <input
                placeholder="Name"
                className="block border bg-[#F3F3F3] text-sm px-20 py-7 rounded-t-3xl"
                type="text"
              />
              <input
                placeholder="email "
                className="border block bg-[#F3F3F3] text-sm px-20 py-7"
                type="email"
              />
              <input
                placeholder="description"
                className="border block bg-[#F3F3F3] text-sm px-20 py-14 rounded-b-3xl"
                type="text"
              />
              <button className="btn w-full btn-primary mt-5">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OtherSection;