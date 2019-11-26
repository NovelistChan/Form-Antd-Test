import React from 'react'
//import "./index.css"

export default function (props) {

  const description = typeof props.description === "object" ? props.description.text : props.description

  return (
    <div className={`wrapper displayer ${props.unvisible}`} >
      <div className="description">{description}</div>
      <div className="children">{props.children}</div>
    </div>
  )
}