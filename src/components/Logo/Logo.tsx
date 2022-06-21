import { ReactComponent as ReactLogo } from 'assets/Icons/logo.svg'
import React from 'react'

export const Logo: React.FC = () => {
  return (
    <>
      <div className="animate-[translatex_10s_ease-in-out_infinite] z-10">
        <ReactLogo
          width="40"
          height="40"
          fill="blue"
          className="animate-[spin_10s_ease-in-out_infinite] rounded-full bg-indigo-200"
        />
      </div>
      <span className="text-sky-400 absolute text-3xl">SJira</span>
    </>
  )
}
