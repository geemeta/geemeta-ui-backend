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
export default utils
