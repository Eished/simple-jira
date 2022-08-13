import { useAuth } from 'context/AuthContext'
import { FC } from 'react'
import { Layout } from 'views/Layout'
import { LoginView } from 'views/LoginView'

const App: FC = () => {
  console.log('App render...')
  const { user } = useAuth()

  return <>{user ? <Layout /> : <LoginView />}</>
}

export default App
