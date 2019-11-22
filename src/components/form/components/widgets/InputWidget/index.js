import React from 'react'
import { Input } from 'antd'
export default function (props) {

    return (
        <Input 
            placeholder="请输入..."
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            // style={{width:"100"}}
        />
    )
}