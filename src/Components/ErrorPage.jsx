import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center">
          something went wrong please try again!!!
        </h1>
        <img
          className="mx-auto w-[1150px]"
          src="https://i.ibb.co/gtbWM8m/404-error-template-3-removebg-preview.png"
          alt=""
        />
        <div className='text-center'>
          <Link to="/">
            <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;