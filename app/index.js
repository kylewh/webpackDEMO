import _ from 'lodash'

var component = () => {
  var element = $('<div></div>')
  element.html(_.join(['Hello', 'Webpack'], ' '))
  return element
}

$('body').append(component())
