import React from 'react'
import utils from '../utils'
import Package from '../Package'
import { Table, Divider, Tag, Button } from 'antd'

export default function (props) {
  const { schema, formData, global, onChange } = props

  const changeHandler = (data, index) => {
    let value = formData.map((v, i) => i === index ? data : v)
    onChange(value)
  }

  const upHandler = index => {
    let value = formData
    var temp = value[index]
    value[index] = value[index - 1]
    value[index - 1] = temp
    onChange(value)
  }

  const downHandler = index => {
    let value = formData
    var temp = value[index]
    value[index] = value[index + 1]
    value[index + 1] = temp
    onChange(value)
  }

  const deleteHandler = index => {
    let value = formData
    value.splice(index, 1)
    onChange(value)
  }

  const addHandler = _ => {
    let value = formData
    value.push(schema.items.default || utils.default(schema.items.type))
    onChange(value)
  }

  const items = formData.map((data, index) => (
    <div key={index} className="item">
      <Package schema={schema.items} formData={data} global={global} onChange={data => changeHandler(data, index)} />
      <Button onClick={_ => upHandler(index)} disabled={index === 0}>UP</Button>
      <Button onClick={_ => downHandler(index)} disabled={index === formData.length - 1}>DOWN</Button>
      <Button onClick={_ => deleteHandler(index)}>DEL</Button>
    </div>
  ))

  return (
    <div className="field array">
      {items}
      <Button onClick={addHandler}>Add</Button>
    </div>
  )
}