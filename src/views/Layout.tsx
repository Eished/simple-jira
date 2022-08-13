import { FlowNavBar } from 'components/Navigation/FlowNavBar'
import { NavRoutes } from 'components/Navigation/NavRoutes'
import { SideBar } from 'components/Sidebar/Sidebar'
import { FC } from 'react'

export const Layout: FC = () => {
  return (
    <div className="flex flex-col h-screen w-full dark:bg-gray-900">
      <FlowNavBar />
      <div className="flex flex-shrink flex-grow h-full overflow-hidden">
        <SideBar />
        <div className="flex justify-center w-full overflow-auto">
          <NavRoutes />
        </div>
      </div>
      {/* <FlowFooter /> */}
    </div>
  )
}
