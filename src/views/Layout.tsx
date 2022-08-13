import { FlowFooter } from 'components/Footer/FlowFooter'
import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import { FC } from 'react'

export const Layout: FC = () => {
  return (
    <div className="flex flex-col h-screen w-full dark:bg-gray-900">
      <FlowNavBar />
      <div className="flex-shrink flex-grow h-full overflow-auto">
        <NavRoutes />
      </div>
      <FlowFooter />
    </div>
  )
}
