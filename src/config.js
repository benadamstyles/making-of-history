import rivets from 'rivets'

Object.assign(rivets.formatters, {
  matchesRange: (range, begin, end) => {
    const isRange = range.includes('-'),
    min = parseInt(isRange ? range.split('-')[0] : range, 10),
    max = parseInt(isRange ? range.split('-')[1] : range, 10),
    b = parseInt(begin, 10),
    e = parseInt(end, 10)

    if (b <= min && max <= e) return true
    else return false
  },

  toBC: {
    read: val => {
      const int = parseInt(val, 10)
      return int < 0 ? `${Math.abs(int)} BC` : `${val} AD`
    },
    publish: val => val.includes('BC') ? `${0 - parseInt(val, 10)}` : `${parseInt(val, 10)}`
  }
})
