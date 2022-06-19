import { faker } from '@faker-js/faker'
import fs from 'fs'
import path from 'path'
import { User } from '../src/type/User'

type DBJson = {
  user: User[]
}

export function createRandomUser(): User {
  const user: User = {
    id: faker.datatype.uuid(),
    username: '',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(),
    email: '',
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }
  user.username = user.firstName + '.' + user.lastName
  user.email = user.username + '@simplejira.com'
  return user
}

const generateUser = () => {
  const users: User[] = []
  // Create 10 users
  Array.from({ length: 10 }).forEach(() => {
    users.push(createRandomUser())
  })
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
