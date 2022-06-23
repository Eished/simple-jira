import AuthApi from 'api/auth'
import { FlowFooter } from 'components/Footer/FlowFooter'
import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import React from 'react'
import { Login } from 'views/Login'

const App: React.FC = () => {
  console.log('App render...')
  const isLogin = new AuthApi().isLogin()

  return (
    <div className="flex flex-col justify-center dark:bg-gray-900">
      {isLogin ? (
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
