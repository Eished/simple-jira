import { ReactComponent as ReactLogo } from 'assets/Icons/logo.svg'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from 'view/Home'
import { Projects } from 'view/Projects'

export const Navigation: React.FC = () => {
  return (
    <>
      <nav className="flex items-center bg-gray-100 shadow-md">
        <div className="animate-[translatex_10s_ease-in-out_infinite] z-10">
          <ReactLogo
            width="50"
            height="50"
            fill="blue"
            className="animate-[spin_10s_ease-in-out_infinite] rounded-full bg-blue-200"
          />
        </div>
        <ul className="flex w-full justify-evenly z-50">
          <li className="text-blue-700 hover:text-blue-500 font-medium ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-500 font-medium ">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-500 font-medium ">
            <Link to="/users">Users</Link>
          </li>
          <li className="text-blue-700 hover:text-blue-500 font-medium ">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<>users</>} />
        <Route path="/about" element={<>about</>} />
      </Routes>
    </>
  )
}
