import { FlowFooter } from 'components/Footer/FlowFooter'
import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import React from 'react'
import { Login } from 'view/Login'

const App: React.FC = () => {
  console.log('App render...')
  const token = localStorage.getItem('token')

  return (
    <div className="flex flex-col justify-center">
      {token ? (
        <>
          <FlowNavBar />
          <NavRoutes />
          <FlowFooter />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
