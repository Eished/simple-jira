import UserApi from 'api/user'
import { SearchPanel } from 'components/SearchPanel/SearchPanel'
import { ReactTableCard } from 'components/Table/ReactTableCard'
import React, { useEffect, useState } from 'react'
import { User } from 'type/User'

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    UserApi.getAllUsers().then((data) => setUsers(data))
  }, [])

  return (
    <div className="flex flex-col m-5 items-center space-y-6">
      <SearchPanel />
      {users.length ? <ReactTableCard searchBar={true} data={users} striped={false} /> : ''}
    </div>
  )
}
