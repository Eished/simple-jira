import { useAuth } from 'context/AuthContext'
import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react'
import { FC } from 'react'

export const NavUserBar: FC = () => {
  const { user, logout } = useAuth()
  return user ? (
    <div className="flex md:order-2 z-50 space-x-2">
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <Dropdown inline label={<Avatar alt="User settings" img={user.avatar} rounded />}>
        <Dropdown.Header>
          <span className="block text-sm">{user.username}</span>
          <span className="block truncate text-xs mt-2 font-medium text-gray-500">{user.username}</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
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
