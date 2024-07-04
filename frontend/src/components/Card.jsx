import React from 'react';

function Card({ item }) {
  return (
    <>
      <div className='flex flex-col sm:flex-row m-3'>
        <div className="card w-full sm:w-96 bg-yellow-400 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
          <figure className="px-4 py-2">
            <img src={item.image} alt="Item" className="object-cover h-48 w-full rounded-t-lg" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="mt-2">{item.title}</p>
            <div className="card-actions flex justify-between mt-4">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-orange-500 duration-300 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
