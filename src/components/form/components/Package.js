import React from 'react'
import fields from './fields'
import wrappers from './wrappers'

export default function (props) {

  const Field = fields.parser(props.schema.type)

  let Package = <Field {...props} />

  wrappers.forEach(wrapper => {
    if (props.schema[wrapper.property]) {
      const Wrapper = wrapper.component
      var properties = {}
      properties[wrapper.property] = props.schema[wrapper.property]
      // console.log("pakage", props.formData)
      Package = (
        <Wrapper {...properties} formData={props.formData} global={props.global}>
          {Package}
        </Wrapper>
      )
    }
  })

  return Package
}