const Footer = () => {
    return (
      <div>
        <footer className=" gap-5 bg-black p-10">
          <div className="py-5 items-center w-20 mx-auto">
            <img
              style={{ backgroundColor: "white" }}
              src="https://i.ibb.co/vZ8b1k5/vector-illustration-sports-car-logo-template-cool-luxurious-elegant-vector-illustration-sports-car-l.png"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-xl text-white text-center">
              Automotive
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <img src="https://i.ibb.co/FKNXTz8/twitter-1.png" alt="" />
            <img src="https://i.ibb.co/6WMc9vK/facebook-1.png" alt="" />
            <img src="https://i.ibb.co/k278dgN/Group-49.png" alt="" />
            <img src="https://i.ibb.co/G2RmFTh/linkedin-1.png" alt="" />
            <img src="https://i.ibb.co/7XNBCNY/instagram-1.png" alt="" />
            <img src="https://i.ibb.co/rkf112X/apple-1.png" alt="" />
          </div>
          <div className="text-sm text-white text-center pt-4">
            <p>@2023 Automotive</p>
            <p>ALL RIGHT RESERVED</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;