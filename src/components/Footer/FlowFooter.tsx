import { Logo } from 'components/Logo/Logo'
import { Footer } from 'flowbite-react'
import React, { FC } from 'react'

export const FlowFooter: FC = () => {
  return (
    <Footer className="flex flex-col">
      <React.Fragment key=".0">
        <div className="flex w-full justify-between">
          <Logo />
          <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <Footer.Copyright by="Flowbite™" href="#" year={2022} />
      </React.Fragment>
    </Footer>
  )
}
