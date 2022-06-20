import { FlowSelect } from 'components/Select/FlowSelect'
import { Button, TextInput } from 'flowbite-react'
import React from 'react'

export const SearchPanel: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-96">
        <TextInput sizing="md" shadow />
      </div>
      <div className="w-32">
        <FlowSelect />
      </div>
      <Button color="info">Search</Button>
    </div>
  )
}
