import { Navbar } from 'flowbite-react'
import { useLinkClickHandler, useLocation } from 'react-router-dom'

export interface NavLinkProps {
  to: string
  text: string
}

export default function NavLink(props: NavLinkProps) {
  const location = useLocation()
  const clickHandler = useLinkClickHandler(props.to)

  return (
    <span onClick={clickHandler}>
      <Navbar.Link href={props.to} active={location.pathname === props.to}>
        {props.text}
      </Navbar.Link>
    </span>
  )
}
