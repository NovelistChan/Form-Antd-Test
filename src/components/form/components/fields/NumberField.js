import React from 'react'
// import { InputNumber } from 'antd'
import widgets from '../widgets'
// export default function (props) {
//   return <input className="field string" type="text" value={props.formData} onChange={e => props.onChange(e.target.value)} />
// }

export default function (props) {

    const Widget = widgets.parser("inputNumber")
    // console.log(Widget)
    //return <div></div>
    return (
        <div>
            <Widget placeholder="Please Input" value={props.formData}
                onChange={value => props.onChange(value)} />
        </div>
    )
}