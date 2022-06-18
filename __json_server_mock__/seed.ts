import fs from 'fs'
import path from 'path'

type User = {
  id: number
  name: string
}

type DBJson = {
  user: User[]
}

const generateUser = () => {
  const users: User[] = []
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    users.push({ id: i + 1, name: `user${i + 1}` })
  }
  return users
}

const writeData = (data: DBJson, name = 'db.json') => {
  return fs.writeFileSync(path.join(__dirname, name), JSON.stringify(data))
}

const starter = () => {
  console.log('Start seed...')

  const data = { user: generateUser() }
  writeData(data)
}

starter()
