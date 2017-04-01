import _ from 'lodash'
import foo from './foo'

var component = () => {
  var element = $('<div></div>')
  element.html(_.join(['Hello', 'Webpack'], ' '))
  return element
}

$('body').append(component())

console.log(foo)

console.log(foo())
