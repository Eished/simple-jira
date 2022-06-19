import UserApi from 'api/user'
import React, { useEffect, useState } from 'react'
import { User } from 'type/User'
import { Navigation } from 'view/Navigation'

const App: React.FC = () => {
  console.log('App render...')

  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    UserApi.getUserById('7b0ce6b5-1e69-4e06-98ce-2839b64cd374').then(setUser)
  }, [])

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
