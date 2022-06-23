import AuthApi from 'api/auth'
import UserApi from 'api/user'
import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { User } from 'type/User'

export const NavUserBar: React.FC = () => {
  const authApi = new AuthApi()
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    setUser(new UserApi().getMe())
  }, [])

  const logout = () => {
    authApi.logout()
  }

  return user ? (
    <div className="flex md:order-2 z-50 space-x-2">
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <Dropdown inline label={<Avatar alt="User settings" img={user.avatar} rounded />}>
        <Dropdown.Header>
          <span className="block text-sm">{user.firstName + ' ' + user.lastName}</span>
          <span className="block truncate text-xs mt-2 font-medium text-gray-500">{user.email}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  ) : (
    <div className="flex md:order-2 z-50">
      <Button>Login</Button>
      <Navbar.Toggle />
    </div>
  )
}
