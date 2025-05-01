     import React, { useState } from 'react';

    const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
        // Add login logic here (API call etc.)
      };
    
      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-center mb-6">Login to TEESTORE</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded-md px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
      );
    };
    
    export default LoginPage;
    
