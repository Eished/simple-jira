import { Route, Routes } from 'react-router-dom'
import { About } from 'view/About'
import { Dashboad } from 'view/Dashboad'
import { Projects } from 'view/Projects'
import { Users } from 'view/Users'

export const NavRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboad />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
