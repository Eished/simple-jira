import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import { useDebounce } from 'lib/customHooks'
import React, { useEffect, useState } from 'react'

export const Home: React.FC = () => {
  console.log('Home render...')
  const [searchValue, setSearchValue] = useState<string>('')

  const debounce = useDebounce(searchValue, 2000)

  useEffect(() => {
    console.log('searchValue debounce', searchValue)
  }, [debounce])

  return (
    <div className="flex justify-center m-5">
      <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}
