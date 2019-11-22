import React from 'react'
import fields from './components/fields'
import Form from './components/Form'
import Group from './components/Group'

// import "./components/themes/default.css"
import "antd/dist/antd.css"

export default function (props) {

  const { extensions = {}} = props

  fields.register(extensions.fields || {})

  return <Group className="Form" {...props} />
}