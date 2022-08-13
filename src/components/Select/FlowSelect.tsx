import { Select } from 'flowbite-react'
import React, { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FlowSelectProps {}

export const FlowSelect: FC<FlowSelectProps> = () => {
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
