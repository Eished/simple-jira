import { Navbar } from 'flowbite-react'
import { FC } from 'react'
import { useLinkClickHandler, useLocation } from 'react-router-dom'

interface NavLinkProps {
  to: string
  text: string
}

// (property) NavLinkProps.to: string 'to' is missing in props validation
export const NavLink: FC<NavLinkProps> = ({ to, text }: NavLinkProps) => {
  const location = useLocation()
  const clickHandler = useLinkClickHandler(to)

  return (
    <span onClick={clickHandler}>
      <Navbar.Link href={to} active={location.pathname === to}>
        {text}
      </Navbar.Link>
    </span>
  )
}
