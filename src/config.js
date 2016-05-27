import rivets from 'rivets'

function normalizeYear(str) {
  return parseInt(str.replace(/\D/g, '').trim(), 10) * (
    str.toLowerCase().includes('bc') ? -1 : 1
  )
}

Object.assign(rivets.formatters, {
  matchesRange(range, begin, end) {
    const isRange = range.includes('-'),
          min = normalizeYear(
            isRange ? range.split('-')[0] : range
          ),
          max = normalizeYear(
            isRange ? range.split('-')[1] : range
          ),
          b = parseInt(begin, 10),
          e = parseInt(end, 10);

    return b <= min && max <= e
  },

  toBC: {
    read(val) {
      const int = Number.parseInt(val, 10)
      return int < 0 ?
        `${Math.abs(int)} BC` :
        `${Number.isNaN(int) ? 0 : val} AD`
    },
    publish: val => val.includes('BC') ? `${0 - parseInt(val, 10)}` : `${parseInt(val, 10)}`
  }
})
