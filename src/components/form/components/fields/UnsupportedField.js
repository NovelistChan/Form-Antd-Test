import React from 'react'

export default function (props) {
  return <div className="field unsupported">{JSON.stringify(props.schema)}</div>
}