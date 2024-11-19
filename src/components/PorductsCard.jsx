import React from 'react';

const PorductsCard = ({ products }) => {
   const { subregion,flags,area,status,region} = products;
   console.log(products);
   return (
      <div className="card bg-base-100 shadow-xl border transition hover:scale-105">
         <figure className='p-5'>
            <img className='w-[350px] h-[250px] rounded-xl'
               src={flags.png}
               alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title font-bold text-3xl">
               {subregion}
            </h2>
            <p className='text-xl font-bold'>Area: {area}</p>
            <p className='text-xl font-semibold'>Region: {region}</p>
            <p className='text-xl'>Status: {status}</p>
            <div className="card-actions justify-end">
               <button className="btn btn-primary font-bold">Visite Now</button>
            </div>
         </div>
      </div>
   );
};

export default PorductsCard;