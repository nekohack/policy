const dayjs = require('dayjs')

module.exports = async function() {
  return {
    year: dayjs().year(),
    formulationAt: dayjs('2020/05/30').format('YYYY年MM月DD日')
  }
}
