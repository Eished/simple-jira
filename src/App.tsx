import { FlowFooter } from 'components/Footer/FlowFooter'
import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import React from 'react'

const App: React.FC = () => {
  console.log('App render...')

  return (
    <div className="flex flex-col justify-center">
      <FlowNavBar />
      <NavRoutes />
      <FlowFooter />
    </div>
  )
}

export default App
