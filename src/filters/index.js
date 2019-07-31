// 百分比保留两位小数
const cent = Percentage => Percentage ? (Percentage * 100).toFixed(2) + '%' : ''

const stars = num => num ? '*'.repeat(num) : ''
/*
  2019-06-11 转换成自然语言
*/
const datetamp = (timestamp) => {
  if (!timestamp) return
  const msg = timestamp.split('-')
  msg[1] = msg[1][0] === '0' ? msg[1][1] : msg[1]
  msg[2] = msg[2][0] === '0' ? msg[2][1] : msg[2]
  return `${msg[1]}月${msg[2]}日`
}

/*
  15:42:03 转换成自然语言
*/
const timestamp = (datetamp) => {
  if (!datetamp) return
  const msg = datetamp.split(':')
  return `${msg[0]}点${msg[0]}分`
}

const shuffle = (a) => {
  var len = a.length
  for (var i = 0; i < len; i++) {
    var end = len - 1
    var index = (Math.random() * (end + 1)) >> 0
    var t = a[end]
    a[end] = a[index]
    a[index] = t
  }
  return a
}
export {
  cent,
  datetamp,
  timestamp,
  shuffle,
  stars
}
