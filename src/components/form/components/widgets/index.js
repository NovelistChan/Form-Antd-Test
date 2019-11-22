import InputWidget from './InputWidget'
import InputNumberWidget from './InputNumberWidget'
import InputIntegerWidget from './InputIntegerWidget'
let widgets = {
  "input": InputWidget,
  "inputNumber": InputNumberWidget,
  "inputInteger": InputIntegerWidget
}

export function register(extensions) {
  widgets = { ...widgets, ...extensions.widgets }
}

export function parser(type) {
  return widgets[type] || null
}

export default {
  register,
  parser
}