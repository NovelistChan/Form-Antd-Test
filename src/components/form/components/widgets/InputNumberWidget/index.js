import React from 'react'
import { InputNumber } from 'antd'
export default function (props) {

    function onChangeNum(value) {
        props.onChange(value)
    }
    // return <InputNumber placeholder="请输入数值..."
    // value = {props.value}
    // onChange = {e => props.onChange(e.target.value)}
    // />
    return (
        <div>
            <InputNumber min={-999999} max={999999} defaultValue={0} onChange={onChangeNum} />
        </div>
    )
}