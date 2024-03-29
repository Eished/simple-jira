import UserApi from 'api/user'
import { ReactTableCard } from 'components/Table/ReactTableCard'
import { useMount } from 'lib/customHooks'
import { FC, useState } from 'react'
import { User } from 'type/User'

export const Users: FC = () => {
  const userApi = new UserApi()

  const [users, setUsers] = useState<User[]>([])
  useMount(() => {
    userApi.getAllUsers().then((data) => setUsers(data))
  })

  return (
    <div className="flex flex-col m-5 items-center space-y-6">
      {users.length ? <ReactTableCard searchBar={true} data={users} striped={false} /> : ''}
    </div>
  )
}
