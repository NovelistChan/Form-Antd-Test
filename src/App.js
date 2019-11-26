import React from 'react';
import Form from './components/form'

const extensionsForm = {
  "date": (props) => <div>{JSON.stringify(props.formData)}</div>
}

const extensionsDefault = {
  "date": _=>"2000-1-1"
}

function App() {
  return (
    <div className="App">
      <Form
        schema={{
          type: "object",
          properties: {
            // "a": {
            //   type: "string",
            //   title: "项目名称"
            // },
            // "b": {
            //   type: "string",
            //   title: "甲方"
            // },
            // "c": {
            //   type: "array",
            //   title: "物品列表",
            //   items: {
            //     type: "string"
            //   }
            // },
            // "d": {
            //   type: "number",
            //   title: "金额（万元）"
            // },
            "e": {
              type: "integer",
              title: "合同期限（年）"
            },
            // "f": {
            //   type: "boolean",
            //   title: "是否有附加需求"
            // },
            "g": {
              type: "arrayTable",
              title: "特殊表单项",
              key: "a",
              columns: {
                "a": { title: "name", content: { type: "string" } },
                "b": { title: "name", content: { type: "integer" } },
                "c": { title: "1111", content: { type: "number" } },
                // "c":{ title: "name", content: {type: "string"}},
                // "d":{ title: "name", content: {type: "string"}},
                // "b1":{ title: "name", content: {type: "string"}},
                // "b12":{ title: "name", content: {type: "string"}},
                // "b3":{ title: "name", content: {type: "string"}}
              }
            },
            // "h": {
            //   type: "date",
            //   title: "日期",
            //   // default: {
            //   //   a: "string"
            //   // }
            // }
          }
        }
        }
        onChange={data=>{
          const d = data
          const e = JSON.stringify(d)
          const f = JSON.parse(e)
          console.log(d,e,f)
        }}
        extensions={{ fields: extensionsForm, default: extensionsDefault }}
      />
    </div>
  );
}

export default App;
