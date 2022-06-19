import { Logo } from 'components/Logo/Logo'
import { Navbar } from 'flowbite-react'
import React from 'react'
import NavLink from './NavLink'
import { NavRoutes } from './NavRoutes'
import { NavUserBar } from './NavUserBar'

export const NavBar: React.FC = () => {
  return (
    <div className="w-4/5">
      <Navbar>
        <React.Fragment key=".0">
          <Navbar.Brand href="https://flowbite.com/">
            <Logo />
          </Navbar.Brand>
          <NavUserBar />
          <Navbar.Collapse>
            <NavLink to="/" text="Home" />
            <NavLink to="/projects" text="Projects" />
            <NavLink to="/users" text="Users" />
            <NavLink to="/about" text="About" />
          </Navbar.Collapse>
        </React.Fragment>
      </Navbar>
      <NavRoutes />
    </div>
  )
}
