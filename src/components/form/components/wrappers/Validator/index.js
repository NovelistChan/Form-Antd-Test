import React from 'react'
//import "./index.css"

export default function (props) {

  const { formData, rules } = props

  let hints = []

  rules.forEach((rule, index) => {
    const re = new RegExp(rule.regex)
    if (typeof formData === "string" && !formData.match(re))
      hints.push(<div className="info" key={index}>{rule.info}</div>)
  })

  return (
    <div className="wrapper validator" error={hints.length}>
      {props.children}
      {hints}
    </div>
  )
}