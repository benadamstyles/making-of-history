import {$} from './util'
import Lazy from 'lazy.js'

function getSplitRowsSeq(parent, selector) {
  const els = Array.from(parent.querySelectorAll(selector)),
        bodyTop = $('body').getBoundingClientRect().top;

  return Lazy(els)
    .tap(el => {
      el.style.height = ''
      el.style.marginLeft = ''
    })
    .groupBy(el => String(el.getBoundingClientRect().top - bodyTop))
}

export default function(parent) {
  const parentWidth = Math.floor(parent.offsetWidth),
        rowsSeq = getSplitRowsSeq(parent, 'img');

  rowsSeq
  .map(arr => Lazy(arr))
  .each(rowSeq => {
    const widths = rowSeq.map(item => item.offsetWidth),
          gap = 5,
          totalGaps = (rowSeq.size() - 1) * gap,
          totalWidths = Math.ceil(widths.reduce((x, y) => x + y)),
          ratio = parentWidth / (totalWidths + totalGaps);

    rowSeq.each((item, i) => {
      item.style.height = `${Math.floor(item.offsetHeight * ratio) - 0.5}px`
      if (i > 0) item.style.marginLeft = `${gap}px`
    })
  })
}
