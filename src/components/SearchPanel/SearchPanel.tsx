import { FlowSelect } from 'components/Select/FlowSelect'
import { Button, TextInput } from 'flowbite-react'
import React from 'react'

interface SearchPanelProps {
  setSearchValue: (value: string) => void
  searchValue?: string
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ setSearchValue, searchValue }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-96">
        <TextInput
          shadow
          type="text"
          sizing="md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="w-32">
        <FlowSelect />
      </div>
      <Button color="info">Search</Button>
    </div>
  )
}
