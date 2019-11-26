import Displayer from './Displayer'
import Validator from './Validator'

export default [
  { property: "rules", component: Validator },
  { property: "description", component: Displayer },
]