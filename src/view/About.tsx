import UserApi from 'api/user'
import { ReactTableCard } from 'components/Table/ReactTableCard'
import React, { useEffect, useState } from 'react'
import { User } from 'type/User'

export const About: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    UserApi.getAllUsers().then((data) => setUsers(data))
  }, [])

  return (
    <div className="flex flex-col m-5 items-center space-y-6">
      {users.length ? <ReactTableCard searchBar={false} data={users} /> : ''}
    </div>
  )
}
