import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import { ReactTableCard } from 'components/Table/ReactTableCard'
import React from 'react'

export const Projects: React.FC = () => {
  const data = [
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
  ]
  return (
    <div className="flex flex-col m-5 items-center space-y-6">
      <SearchPanel />
      <ReactTableCard searchBar={false} data={data} />
    </div>
  )
}
