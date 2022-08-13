import { FlowFooter } from 'components/Footer/FlowFooter'
import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import { useAuth } from 'context/AuthContext'
import { FC } from 'react'
import { Login } from 'views/Login'

const App: FC = () => {
  console.log('App render...')
  const { user, login, register } = useAuth()

  return (
    <div className="flex flex-col justify-center dark:bg-gray-900">
      {user ? (
        <>
          <FlowNavBar />
          <NavRoutes />
          <FlowFooter />
        </>
      ) : (
        <Login login={login} register={register} />
      )}
    </div>
  )
}

export default App
