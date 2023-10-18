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
          className="flex justify-center  h-[100vh] w-[100%]"
        >
          <div className="flex justify-center px-10 bg-[#0b0b0b80] h-full w-full items-center">
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
              <img src="https://i.ibb.co/vjC6TPd/gear.png" alt="flex-1" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-5xl font-bold text-center">
            Let's make some <span className="text-[#FF444A] ">Deal</span>
          </h1>
          <p className="text-center space-y-2 mx-10 text-xl text-[#706F6F] my-5">
            Select two package & get{" "}
            <span className="text-white px-5 py-2 rounded-2xl bg-[#ff007a]">
              20% discount
            </span>
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10">
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
            <div>
              <img src={"https://i.ibb.co/XYtfvpy/closure.png"} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default OtherSection;