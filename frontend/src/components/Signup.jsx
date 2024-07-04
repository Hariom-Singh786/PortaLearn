import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div className="relative">
            <Link to="/" className="absolute right-0 top-0 text-gray-400 hover:text-gray-600">
              ✕
            </Link>
            <h3 className="text-2xl font-bold text-center text-gray-700">Signup</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-400 text-sm">This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-400 text-sm">This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-400 text-sm">This field is required</span>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>
          </form>
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-gray-600">Have an account?</p>
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
