import React from 'react'
import utils from './utils'
import Package from './Package'

// class Form extends React.Component {
//   render() {
//     return (
//       <Package
//         schema={this.props.schema}
//         formData={this.state.formData}
//         global={{ ...this.state }}
//         onChange={this.changeHandler} />
//     )
//   }

//   state = {
//     formData: this.props.formData || this.props.schema.default || utils.default(this.props.schema.type),
//     settings: {}
//   }

//   changeHandler = data => this.setState({ formData: data }, _ => this.props.onChange && this.props.onChange(this.state.formData))
// }

// export default Form

export default function (props) {
  return (
    <Package {...props} />
  )
}