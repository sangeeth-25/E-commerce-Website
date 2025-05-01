import { 
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
 } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddTEESPage from './pages/AddTEESPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';



const App = () => {

  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element ={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/add-job' element={<AddTEESPage  addJobSubmit={addJob}/>} />
    <Route path="/cartpage" element={<CartPage />} />
    <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
  );

  return <RouterProvider router={router}/>
};

export default App;