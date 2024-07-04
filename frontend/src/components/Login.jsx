import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-2xl font-bold text-center text-gray-700">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* email */}
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
            {/* password */}
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
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-gray-600">Not registered?</p>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
