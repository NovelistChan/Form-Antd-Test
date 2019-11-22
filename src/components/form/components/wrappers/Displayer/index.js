import React from 'react'
//import "./index.css"

export default function (props) {

  const title = typeof props.title === "object" ? props.title.text : props.title

  return (
    <div className={`wrapper displayer ${props.unvisible}`} >
      <div className="title">{title}</div>
      <div className="children">{props.children}</div>
    </div>
  )
}