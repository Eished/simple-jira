import { useAuth } from 'context/AuthContext'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { useMount } from 'lib/customHooks'
import { FC, useState } from 'react'

export const Register: FC<{ setIsRegister: (r: boolean) => void }> = ({ setIsRegister }) => {
  const { register } = useAuth()
  const [agree, setAgree] = useState(false)
  const [isAllValid, setIsAllValid] = useState<(boolean | undefined)[]>([undefined, undefined, undefined, undefined])
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  const passwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,20}$/

  useMount(() => {
    setEmail('Marilyne.Waters@simplejira.com')
    setPassword('nEiEQtUZ7DgL09m')
    setPassword2('nEiEQtUZ7DgL09m')
    setAgree(true)
    setIsAllValid([true, true, true, true])
  })

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (isAllValid.every((v) => v)) {
          register({ email, password: password })
        }
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
            if (emailReg.test(e.target.value)) {
              isAllValid[0] = true
            } else {
              isAllValid[0] = false
            }
            setIsAllValid([...isAllValid])
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
          helperText={
            isAllValid[1] === false
              ? "Make sure it's 6 ~ 20 characters and including a number, a uppercase letter and a lowercase letter."
              : ''
          }
          value={password}
          onChange={(e) => {
            if (passwdReg.test(e.target.value)) {
              isAllValid[1] = true
              if (e.target.value === password2) {
                isAllValid[2] = true
              } else {
                isAllValid[2] = false
              }
            } else {
              isAllValid[1] = false
            }
            setIsAllValid([...isAllValid])
            setPassword(e.target.value)
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          value={password2}
          helperText={isAllValid[2] === false ? 'Two different passwords entered' : ''}
          onChange={(e) => {
            if (e.target.value === password) {
              isAllValid[2] = true
            } else {
              isAllValid[2] = false
            }
            setIsAllValid([...isAllValid])
            setPassword2(e.target.value)
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="agree"
          checked={agree}
          onChange={(e) => {
            isAllValid[3] = e.target.checked
            setIsAllValid([...isAllValid])
            setAgree(e.target.checked)
          }}
        />
        <Label htmlFor="agree">
          I agree with the{' '}
          <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button disabled={!isAllValid.every((v) => v)} type="submit">
        Register new account
      </Button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            setIsRegister(false)
          }}
          className="text-blue-700 hover:underline dark:text-blue-500">
          Back to Login
        </a>
      </div>
    </form>
  )
}
