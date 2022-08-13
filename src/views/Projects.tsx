import { ReactTableCard } from 'components/Table/ReactTableCard'
import { Button } from 'flowbite-react'
import { useArray } from 'lib/customHooks'
import { FC } from 'react'

export const Projects: FC = () => {
  const data = [
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
    { name: 'mike', title: 'hello', total: 999, edit: 'Edit' },
  ]

  const [value, add, replace, remove, clear] = useArray(data)
  // const { arr: value, add, replace, remove, clear } = useArray2Obj(data)

  return (
    <div className="flex flex-col m-5 items-center space-y-6">
      <ReactTableCard searchBar={false} data={data} />
      <div className="flex space-x-2">
        <Button
          onClick={() => {
            add(1, { name: 'jake', title: 'world', total: 666, edit: 'Edit' })
          }}>
          Add
        </Button>
        <Button
          onClick={() => {
            replace(1, { name: 'jake', title: 'world', total: 666, edit: 'Edit' })
          }}>
          replace
        </Button>
        <Button
          onClick={() => {
            remove(1)
          }}>
          remove
        </Button>
        <Button
          onClick={() => {
            clear()
          }}>
          clear
        </Button>
      </div>
      {value.map((item, index) => {
        return <div className="m-2" key={item.name + index}>{`${index} ${item.name} ${item.title} ${item.total} `}</div>
      })}
    </div>
  )
}
