import React from 'react'

const AuthTitle = ({title, subtitle}) => {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  )
}

export default AuthTitle
