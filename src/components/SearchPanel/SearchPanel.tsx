import { FlowSelect } from 'components/Select/FlowSelect'
import { Button, TextInput } from 'flowbite-react'
import { FC } from 'react'

interface SearchPanelProps {
  setSearchValue: (value: string) => void
  searchValue: string
  placeholder?: string
}

export const SearchPanel: FC<SearchPanelProps> = ({ setSearchValue, searchValue, placeholder }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-96">
        <TextInput
          shadow
          type="text"
          sizing="md"
          value={searchValue}
          placeholder={placeholder}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="w-32">
        <FlowSelect />
      </div>
      <Button color="light">Search</Button>
    </div>
  )
}
