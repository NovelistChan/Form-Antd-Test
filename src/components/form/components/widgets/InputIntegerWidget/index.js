import React from 'react'
import { InputNumber } from 'antd'
export default function (props) {
    const { data, onChange } = props

    function onChangeNum(e, value) {
        console.log('changed', value)
        props.onChange(value)
    }
    // return <InputNumber placeholder="请输入数值..."
    // value = {props.value}
    // onChange = {e => props.onChange(e.target.value)}
    // />
    return (
        <div>
            <InputNumber min={0} max={999999} defaultValue={0} onChange={onChangeNum} />
        </div>
    )
}