import { ReactComponent as Arrow } from 'assets/Icons/arrow.svg'
import { Badge, Sidebar } from 'flowbite-react'
import { useState } from 'react'

export const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true)
  return (
    <div className="w-fit relative bg-gray-50 shadow-md">
      <Arrow
        className={`w-7 h-7 absolute fill-blue-700 dark:fill-gray-200 dark:hover:fill-gray-300 bg-white dark:bg-gray-600 rounded-full shadow border-2 box-border m-1 mt-2 text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 focus:ring-2 z-10 scroll-m-0 ${
          showSideBar ? 'rotate-180 -right-4' : ' -right-8'
        }`}
        onClick={() => {
          setShowSideBar(!showSideBar)
        }}
      />
      {showSideBar ? (
        <>
          <hr className="dark:border-gray-700" />
          <Sidebar>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#">Dashboard</Sidebar.Item>
                <Sidebar.Item href="#">Kanban</Sidebar.Item>
                <Sidebar.Item href="#">Inbox</Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#">Users</Sidebar.Item>
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sign In</Sidebar.Item>
                <Sidebar.Item href="#">Sign Up</Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
            <hr className="dark:border-gray-700" />
            <Sidebar.CTA>
              <div className="mb-3 flex items-center">
                <Badge color="warning">Beta</Badge>
                <button
                  aria-label="Close"
                  className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                  type="button">
                  <svg
                    aria-hidden={true}
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in
                your profile.
              </p>
              <a
                href="#"
                className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Turn new navigation off
              </a>
            </Sidebar.CTA>
          </Sidebar>
          <hr className="dark:border-gray-700" />
        </>
      ) : null}
    </div>
  )
}
