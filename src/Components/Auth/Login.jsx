

import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (handleLogin) {
      handleLogin(email, password);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Left pane - Image */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gray-900">
        <img
          src="/login-bg.png"
          alt="Employee Management Dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
        />
        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent pointer-events-none"></div>
        {/* Decorative elements */}
        <div className="absolute bottom-12 left-12 right-12 text-white pointer-events-none">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
            Employee Workspace 2.0
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Streamline your<br />
            <span className="text-emerald-400">Team Workflow</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed">
            The ultimate management system designed to boost productivity, simplify administrative tasks, and keep your corporate team perfectly synced.
          </p>
        </div>
      </div>

      {/* Right pane - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white relative">
        
        {/* Sign Up Button (Top Right) */}
        <div className="absolute top-8 right-8">
          <p className="text-sm text-gray-500 font-medium">
            New here?{" "}
            <button type="button" className="text-emerald-600 font-bold hover:text-emerald-500 hover:underline transition-all">
              Create an account
            </button>
          </p>
        </div>

        <div className="w-full max-w-md mt-10 lg:mt-0">
          {/* Header Mobile / Tablet Only */}
          <div className="lg:hidden mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back 👋</h1>
            <p className="text-gray-500">Manage your employees with ease</p>
          </div>

          <div className="hidden lg:block mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Welcome Back 👋</h2>
            <p className="text-gray-500 text-base">Please enter your details to sign in.</p>
          </div>
          
          <form onSubmit={submitHandler} className="flex flex-col gap-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors cursor-pointer" 
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>
              <button 
                type="button" 
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 hover:underline transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              className="w-full py-3.5 bg-emerald-500 text-white font-bold rounded-xl
                         hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 
                         active:scale-[0.98] transition-all duration-300 transform"
            >
              Sign In
            </button>

            <div className="mt-8 text-center text-sm text-gray-500 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative px-4 bg-white font-medium">Or continue with</span>
            </div>

            <div className="mt-6 flex gap-4">
              <button 
                type="button" 
                className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Google</span>
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
