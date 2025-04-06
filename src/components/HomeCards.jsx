import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
        <h2 className="text-2xl font-bold">For Buyers</h2>
            <p className="mt-2 mb-4">
              Browse our products and grab yours today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse TEES
            </Link>
            </Card>
          <Card bg='bg-indigo-100'>
          <h2 className="text-2xl font-bold">For Sellers</h2>
            <p className="mt-2 mb-4">
              List your TEES to fit the perfect customer
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add TEES
            </Link>
            </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards