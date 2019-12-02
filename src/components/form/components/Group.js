import React from 'react'
import Form from './Form'
import utils from './utils'
import { Collapse } from 'antd'

const { Panel } = Collapse

class Group extends React.Component {
  render() {

    const { schema, onChange } = this.props
    const { formData } = this.state

    let groups = { "default": { type: "object", properties: {} } }
    let datas = { "default": {} }

    Object.keys(schema.properties).forEach(property => {
      const group = schema.properties[property].group || "default"
      if (!groups[group]) {
        groups[group] = { type: "object", properties: {} }
        datas[group] = {}
      }
      groups[group].properties[property] = schema.properties[property]
      datas[group][property] = formData[property]
    })

    return (
      <Collapse defaultActiveKey={["default"]}>
        {Object.keys(groups).map(group => (
          <Panel key={group}>
            <Form
              schema={groups[group]}
              formData={datas[group]}
              global={{}}
              onChange={data => {
                // console.log(data)
                // console.log(formData)
                this.setState({ 
                  formData: { ...this.state.formData, ...data } 
                }, 
                _ => onChange && onChange(this.state.formData))
              }
            }
            />
          </Panel>
        ))}
      </Collapse>
    )
  }

  state = {
    formData: this.props.formData || this.props.schema.default || utils.default.parser(this.props.schema.type)
  }
}

export default Group