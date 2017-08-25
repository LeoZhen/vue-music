// 增加类名
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断是否含有类名
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 设置获取自定义属性
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// 能力检测
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    // 以transform为例子
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'oTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    // 得到内核
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  // 浏览器出错
  return false
})()

// 判断属性是否要加上浏览器内核前缀
export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  // 只有transform
  if (vendor === 'standard') {
    return style
  }
  // 返回内核名+style首字母大写+style首字母之后的字母
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}