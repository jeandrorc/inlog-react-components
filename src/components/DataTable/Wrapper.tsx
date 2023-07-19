import React from 'react'

type Props = {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default Wrapper