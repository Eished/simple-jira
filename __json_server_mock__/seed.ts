import { faker } from '@faker-js/faker'
import fs from 'fs'
import path from 'path'
import { User } from '../src/type/User'

type DBJson = {
  users: User[]
}

export function createRandomUser(id: number): User {
  const user: User = {
    id: id + 1,
    username: '',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(),
    email: '',
    avatar: faker.image.avatar(),
    password: '$2a$10$pEVcmfqCpY/A.dzP2WKxTOXyNNwNb.xkZMTisMeKnYQTOu12a5Fau', // nEiEQtUZ7DgL09m
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
  Array.from({ length: 25 }).forEach((item, index) => {
    users.push(createRandomUser(index))
  })
  return users
}

const writeData = (data: DBJson, name = 'db.json') => {
  return fs.writeFileSync(path.join(__dirname, name), JSON.stringify(data))
}

const starter = () => {
  console.log('Start seed...')

  const data = { users: generateUser() }
  writeData(data)
}

starter()
