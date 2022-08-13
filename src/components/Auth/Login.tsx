import { useAuth } from 'context/AuthContext'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { FC, useState } from 'react'

export const Login: FC<{ setIsRegister: (r: boolean) => void }> = ({ setIsRegister }) => {
  const { login } = useAuth()
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState<string>('Marilyne.Waters@simplejira.com')
  const [password, setPassword] = useState<string>('nEiEQtUZ7DgL09m')

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        login({ email, password: password })
      }}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="example@simplejira.com"
          required={true}
          shadow={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          required={true}
          shadow={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={remember}
            onChange={(e) => {
              setRemember(e.target.checked)
            }}
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a href="/modal" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
          Lost Password?
        </a>
      </div>
      <Button type="submit">Log in to your account</Button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        First visit please register{' '}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            setIsRegister(true)
          }}
          className="text-blue-700 hover:underline dark:text-blue-500">
          Create account
        </a>
      </div>
    </form>
  )
}
