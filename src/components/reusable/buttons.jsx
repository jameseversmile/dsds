import React from 'react'

const Buttons = (props) => {
  return (
    <div>
        <button className={`p-3 rounded-lg ${props.className}`}>{props.label}</button>
    </div>
  )
}

export default Buttons