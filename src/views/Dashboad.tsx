import Board from 'components/dnd/board'
import { authorQuoteMap } from 'components/dnd/data'
import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import { useDebounce } from 'lib/customHooks'
import { FC, useEffect, useState } from 'react'

export const Dashboad: FC = () => {
  console.log('Home render...')
  const [searchValue, setSearchValue] = useState<string>('')

  const debounce = useDebounce(searchValue, 2000)

  useEffect(() => {
    console.log('searchValue debounce', searchValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])

  return (
    <div className="flex flex-col items-center m-5 space-y-4">
      <SearchPanel placeholder="useDebounce test" searchValue={searchValue} setSearchValue={setSearchValue} />
      <Board initial={authorQuoteMap} />
    </div>
  )
}
