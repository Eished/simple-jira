import { Footer } from 'flowbite-react'
import { FC } from 'react'

export const FlowFooter: FC = () => {
  return (
    <Footer className="shadow rounded-none">
      <Footer.Copyright href="#" by="Simple Jira™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
