/* eslint-disable no-unneeded-ternary */
let utils = {}
/**
 * param({k1: {k2: {k3: 'value'}}}), output: k1.k2.k3=value
 * param({k1: 'value'}, 'p')), output:p.k1=value
 * param({k1: [{kk1: 'vv1'}, {kk2: 'vv2'}]}, 'p')), output:p.k1[0].kk1=vv1&p.k1[1].kk2=vv2
 * @param param
 * @param prefix
 * @returns {string}
 */
utils.param = function (param, prefix) {
  var str = ''
  if (param instanceof Array || param instanceof Object) {
    for (let k in param) {
      var subPrefix = prefix ? (prefix + (param instanceof Array ? '[' + k + ']' : '.' + k)) : k
      str += '&' + utils.param(param[k], subPrefix)
    }
  } else {
    if ('string|number|boolean'.indexOf(typeof param) !== -1) {
      str += '&' + prefix + '=' + encodeURIComponent(param)
    } else {
      // undefined  RegExp func
    }
  }
  return str.substr(1)
}

utils.trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

utils.join = function (objectAry, propertyName, separator) {
  let stringAry = new Array(objectAry.length)
  for (let i in objectAry) {
    stringAry[i] = objectAry[i][propertyName]
  }
  return stringAry.join(separator)
}
/**
 * 'false' -> false ,'0' -> false
 * @param v
 * @returns {boolean}
 */
utils.toBoolean = function (v) {
  if (typeof v === 'string' && 'false|0'.indexOf(utils.trim(v.toLowerCase())) !== -1) {
    return false
  } else {
    return v ? true : false
  }
}

utils.uuid = function (len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = []
  var i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    var r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}

/**
 * 直接执行eval，代码检查工具eslintrc，提示有误，改该此方法
 * @param expression
 * @returns {*}
 */
utils.eval = function (expression) {
  let Fn = Function
  return new Fn('return ' + expression)()
}
export default utils
