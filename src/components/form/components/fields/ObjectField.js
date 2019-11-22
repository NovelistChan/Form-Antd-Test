import React from 'react'
import utils from '../utils'
import Package from '../Package'

export default function (props) {

  const { schema, formData, global, onChange } = props

  return (
    <div className="field object" >
      {Object.keys(schema.properties).map(name => {
        const subSchema = schema.properties[name]
        return (
          <Package
            key={name}
            schema={subSchema}
            global={global}
            formData={formData[name] || subSchema.default || utils.default(subSchema.type)}
            onChange={data => {
              let value = { ...formData }
              value[name] = data
              onChange(value)
            }} />
        )
      })}
    </div>
  )
}