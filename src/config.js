import rivets from 'rivets'

function parseYear(str) {
  return Number.parseInt(str.replace(/\D/g, '').trim(), 10) * (
    str.toLowerCase().includes('bc') ? -1 : 1
  )
}

Object.assign(rivets.formatters, {

  matchesRange(range, begin, end) {
    const isRange = range.includes('-'),
          min = parseYear(
            isRange ? range.split('-')[0] : range
          ),
          max = parseYear(
            isRange ? range.split('-')[1] : range
          ),
          b = Number.parseInt(begin, 10),
          e = Number.parseInt(end, 10);

    return b <= min && max <= e
  },

  toBC: {
    read(val) {
      const int = Number.parseInt(val, 10)
      return int < 0 ?
        `${Math.abs(int)} BC` :
        `${Number.isNaN(int) ? 0 : val} AD`
    },
    publish: parseYear
  }
})
