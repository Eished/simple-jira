import { Login } from 'components/Auth/Login'
import { Register } from 'components/Auth/Register'
import { FC, useState } from 'react'

export const LoginView: FC = () => {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <div className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <div className="h-fit p-10 bg-white rounded-lg shadow-lg">
        <h2 className="mr-8 text-3xl font-medium text-gray-900 dark:text-white mb-6">Sign in Simple Jira</h2>
        {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login setIsRegister={setIsRegister} />}
      </div>
    </div>
  )
}
