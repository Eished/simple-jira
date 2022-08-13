import { Badge, Sidebar } from 'flowbite-react'

export const SideBar = () => {
  return (
    <div className="w-fit bg-gray-50 shadow-md bg-slate-300">
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
            className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#">
            Turn new navigation off
          </a>
        </Sidebar.CTA>
      </Sidebar>
      <hr className="dark:border-gray-700" />
    </div>
  )
}
