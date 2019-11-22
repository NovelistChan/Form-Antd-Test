import React from 'react';
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <Form
      schema = {{
        type: "object",
        properties: {
          "a":{
            type: "string",
            title: "项目名称"
          },
          "b":{
            type: "string",
            title: "甲方"
          },
          "c": {
            type: "array",
            title: "物品列表",
            items: {
              type: "string"
            }
          },
          "d": {
            type: "number",
            title: "金额（万元）"
          },
          "e": {
            type: "integer",
            title: "合同期限（年）"
          },
          "f": {
            type: "boolean",
            title: "是否有附加需求"
          },
          "g": {
            type: "arrayTable",
            title: "特殊表单项",
            key: "a",
            columns: {
              "a":{ title: "name", content: {type: "string"}},
              "b":{ title: "name", content: {type: "string"}},
              // "c":{ title: "name", content: {type: "string"}},
              // "d":{ title: "name", content: {type: "string"}},
              // "b1":{ title: "name", content: {type: "string"}},
              // "b12":{ title: "name", content: {type: "string"}},
              // "b3":{ title: "name", content: {type: "string"}}
            }
          }
        }
      }}
      />
    </div>
  );
}

export default App;
