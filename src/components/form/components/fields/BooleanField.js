import React from 'react'
import { Input, Checkbox } from 'antd'

export default function (props) {

    function onChangeRadio(value) {
        console.log(value)
        props.onChange(value)
    }

    return (
        <div>
            <Checkbox
                checked={props.formData || false}
                // onClick={e => onChangeRadio(e.target.checked)}
                onChange={e => onChangeRadio(e.target.checked)}
            ></Checkbox>
        </div>
    )
}