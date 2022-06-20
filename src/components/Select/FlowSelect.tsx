import { Select } from 'flowbite-react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FlowSelectProps {}

export const FlowSelect: React.FC<FlowSelectProps> = () => {
  return (
    <Select id="countries">
      <React.Fragment key=".0">
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </React.Fragment>
    </Select>
  )
}
