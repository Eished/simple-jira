import { Route, Routes } from 'react-router-dom'
import { Home } from 'view/Home'
import { Projects } from 'view/Projects'

export const NavRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/users" element={<>users</>} />
      <Route path="/about" element={<>about</>} />
    </Routes>
  )
}
