import React from 'react'
import { Link } from 'react-router-dom'
import blogs from '../Data'

function Blogs() {







    return (
        <div className='grid grid-cols-3 ml-20'>
            {
                blogs.map((one)=>{
                    return (
                    <div key={one.id} className="group rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg">

              <img
                src={one.image}
                className="h-52 w-full rounded-2xl object-cover"
              />

              <h3 className="mt-4 font-semibold text-gray-900">
                {one.title}
              </h3>

              <p className="text-gray-500 text-sm">{one.postedAt}</p>

              <button className="mt-4 w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white">
                <Link to={`/viewblog/${one.id}`}>View Detail</Link>
              </button>

            </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs