import ObjectField from './ObjectField'
import ArrayField from './ArrayField'
import StringField from './StringField'
import UnsupportedField from './UnsupportedField'
import NumberField from './NumberField'
import IntegerField from './IntegerField'
import BooleanField from './BooleanField'
import ArrayTableField from './ArrayTableField'
 import "./index.css"

let fields = {
  "object": ObjectField,
  "string": StringField,
  "array": ArrayField,
  "number": NumberField,
  "integer": IntegerField,
  "boolean": BooleanField,
  "arrayTable": ArrayTableField
}

export function register(extensions) {
  fields = { ...fields, ...extensions }
}

export function parser(type) {
  return fields[type] || UnsupportedField
}

export default {
  register,
  parser
}