import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTEESPage = ({ addJobSubmit }) => {
    const [title,setTitle] = useState('')
    const [type,setType] = useState('Full-Sleeve')
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')
    const [salary,setSalary] = useState('')

    const navigate = useNavigate()

    const submitForm=(e) =>{
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
        }
       addJobSubmit(newJob);
      
       return navigate('/jobs');
    }
    
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add TEES</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">TEES Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value= {type}
                onChange={(e)=>setType(e.target.value)}>
                <option value="Full-Sleeve">Full-Sleeve</option>
                <option value="Half-Sleeve">Half-Sleeve</option>

              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >TEES Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Classic White Tee"
                required
                value= {title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any details like style, material, wash methods etc"
                value= {description}
                onChange={(e)=>setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Price</label>
              
              <input
                type="number"
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. ₹250 / Piece"
                required
                value= {salary}
                onChange={(e)=>setSalary(e.target.value)}
              />

            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Seller Location'
                required          
                value= {location}
                onChange={(e)=>setLocation(e.target.value)} 
              />
            </div>

            

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add TEES
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddTEESPage