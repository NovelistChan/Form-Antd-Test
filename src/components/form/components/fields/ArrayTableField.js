import React from 'react'
import utils from '../utils'
import Package from '../Package'
import { Table, Input, Button, Popconfirm, Form } from 'antd'

class ArrayTableField extends React.Component {
  render() {

    const { schema, formData } = this.props

    return (
      <div>
        <Button onClick={this.handleAdd} type="primary">Add</Button>
        <Table columns={this.columnsParser(schema.columns)} 
        dataSource={formData || schema.default || utils.default("arrayTable")}
        scroll = {{x:1500, y:300}} 
        rowKey = {schema.key}
        />
      </div>
    )
  }

  handleAdd = () => {
    let formData = this.props.formData
    formData.push(this.props.schema.default || utils.default("arrayTable"))
    this.props.onChange(formData)
  }

  handleDel = index => {
    let formData = this.props.formData
    formData.splice(index)
    this.props.onChange(formData)
  }


  columnsParser = columns => {
    let basic = Object.keys(columns).map(column => ({
      dataIndex: column,
      title: columns[column].title,
      width:  columns[column].width || 200,
      render: (d, _, index) => (
        <Package
          global={global}
          schema={columns[column].content}
          formData={this.props.formData[index][column]}
          onChange={data => {
            let formData = this.props.formData
            formData[index][column] = data
            this.props.onChange(formData)
          }} />)
    }))
    basic.unshift({
      title: "序号",
      width: 100,
      fixed: 'left',
      render: (_, record, index) => (
        <div>
          <span>{index}</span>
        </div>
      )
    })
    basic.push({
      title: "选项",
      width: 100,
      fixed: 'right',
      render: (_, record, index) => (
        <div>
          <Button onClick={_ => this.handleDel(index)}>Delete</Button>
          {/* <span>{index}</span> */}
        </div>
      )
    })
    return basic
  }

}



export default ArrayTableField