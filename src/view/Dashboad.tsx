import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import { useDebounce } from 'lib/customHooks'
import React, { useEffect, useState } from 'react'

export const Dashboad: React.FC = () => {
  console.log('Home render...')
  const [searchValue, setSearchValue] = useState<string>('')

  const debounce = useDebounce(searchValue, 2000)

  useEffect(() => {
    console.log('searchValue debounce', searchValue)
  }, [debounce])

  return (
    <div className="flex flex-col items-center m-5 space-y-4">
      <div>
        <p className="text-6xl text-sky-400">Dashboad</p>
      </div>
      <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}
