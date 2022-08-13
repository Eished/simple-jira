import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from 'views/About'
import { Dashboad } from 'views/Dashboad'
import { Projects } from 'views/Projects'
import { Users } from 'views/Users'

export const NavRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboad />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
