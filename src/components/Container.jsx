import React from 'react'

const Container = ({ bgColor, children }) => {
  return (
    <div className={`bg-${bgColor}`}>
      {children}
    </div>
  )
}

export default Container
