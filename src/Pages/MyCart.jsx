import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const cars = useLoaderData([]);

    return (
        <div>
          {cars.length}
        </div>
    );
};

export default MyCart;