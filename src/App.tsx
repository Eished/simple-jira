import { getUserById } from 'api/user'
import 'App.css'
import React, { useEffect, useState } from 'react'
import { ReactComponent as ReactLogo } from './logo.svg'

const App: React.FC = () => {
  console.log('App render...')

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    getUserById('7b0ce6b5-1e69-4e06-98ce-2839b64cd374').then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <ReactLogo width="100" height="100" fill="blue" className="App-logo" />
      <div
        onClick={async () => {
          setCount1((count) => count + 1)
          setCount2((count) => count + 1)
        }}>
        <div>count1： {count1}</div>
        <div>count2： {count2}</div>
      </div>
    </div>
  )
}

export default App
