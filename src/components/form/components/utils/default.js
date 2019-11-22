let _default = {
  "string": _ => "",
  "array": _ => ([]),
  "object": _ => ({}),
  "number": _ => "",
  "integer": _ => "",
  "boolean": _ => "",
  "arrayTable": _=> ([])
}

export function register(extensions) {
  _default = { ..._default, ...extensions }
}

export default function (type) {
  return _default[type]()
}