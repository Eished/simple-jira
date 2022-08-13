import { Logo } from 'components/Logo/Logo'
import { Navbar } from 'flowbite-react'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from './NavLink'
import { NavUserBar } from './NavUserBar'

export const FlowNavBar: FC = () => {
  return (
    <div className="w-full shadow flex justify-center dark:bg-gray-800">
      <div className="w-4/5">
        <Navbar>
          <React.Fragment key=".0">
            <Link to="/" className="flex">
              <Logo />
            </Link>
            <NavUserBar />
            <Navbar.Collapse>
              <NavLink to="/" text="Dashboad" />
              <NavLink to="/projects" text="Projects" />
              <NavLink to="/users" text="Users" />
              <NavLink to="/about" text="About" />
            </Navbar.Collapse>
          </React.Fragment>
        </Navbar>
      </div>
    </div>
  )
}
