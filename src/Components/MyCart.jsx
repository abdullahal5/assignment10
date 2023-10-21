import { useLoaderData } from "react-router-dom";
import Star from "./Star";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
  const cart = useLoaderData();
  console.log(cart);
  const [user, setUser] = useState(cart);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        console.log("delete Confirmed");
        fetch(`https://assignment10-server-peach.vercel.app/info/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingUsers = user.filter((i) => i._id !== _id);
              setUser(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div className="dark:bg-black h-[700vh]">
      <div className="flex justify-center px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {user.map((item) => (
            <div key={item._id}>
              <div className="card dark:bg-black dark:text-white card-side bg-base-100 shadow-xl">
                <figure>
                  <img className="w-56" src={item.photo} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.brandName}</h2>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>{item.options}</p>
                  <div className="flex items-center gap-2">
                    Reviews:
                    <Star star={item.rating}></Star>
                  </div>
                  <p>Price: {item.price}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
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

export default MyCart;
