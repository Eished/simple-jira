import AuthApi from 'api/auth'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

export const Login: React.FC = () => {
  const [show, setShow] = useState(true)
  const [remember, setRemember] = useState(false)
  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState<string>('Marilyne.Waters@simplejira.com')
  const [password, setPassword] = useState<string>('nEiEQtUZ7DgL09m')

  const authApi = new AuthApi()

  const login = () => {
    if (email && password) {
      authApi
        .login({ username: email, password })
        .then(() => window.location.reload())
        .catch((e) => alert(e))
    }
  }
  const registerUser = () => {
    if (email && password) {
      authApi
        .register({ username: email, password })
        .then(() => window.location.reload())
        .catch((e) => alert(e))
    }
  }

  return (
    <React.Fragment>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(!show)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in Simple Jira</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                className="dark:border-gray-500 dark:bg-gray-600"
                placeholder="Example@jira.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                className="dark:border-gray-500 dark:bg-gray-600"
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {register ? (
              <>
                <div className="w-full">
                  <Button onClick={registerUser}>Register a new user</Button>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault()
                      setRegister(false)
                    }}
                    className="text-blue-700 hover:underline dark:text-blue-500">
                    Back to Login
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a href="/modal" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button onClick={login}>Log in to your account</Button>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{' '}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault()
                      setRegister(true)
                    }}
                    className="text-blue-700 hover:underline dark:text-blue-500">
                    Create account
                  </a>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
