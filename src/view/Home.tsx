import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import React from 'react'

export const Home: React.FC = () => {
  console.log('Home render...')

  return (
    <div className="flex justify-center m-5">
      <SearchPanel />
    </div>
  )
}
