import 'babelify/polyfill'

import 'sightglass'
import rivets from 'rivets'
import Stickyfill from 'stickyfill'

import model from './model'

function init() {
  const b = document.getElementsByTagName('body')[0],
        Q = fn => setTimeout(fn, 1),
        whichTransitionEvent = function whichTransitionEvent() {
          const el = document.createElement('fakeelement'),
                transitions = {
                  'transition': 'transitionend',
                  'OTransition': 'oTransitionEnd',
                  'MozTransition': 'transitionend',
                  'WebkitTransition': 'webkitTransitionEnd'
                }

        let t

        for (t in transitions) if (el.style[t] !== undefined) return transitions[t]
      },

      transitionEvent = whichTransitionEvent() || "transitionend",

      stickyElements = document.getElementsByClassName('sticky'),
      stickyfill = Stickyfill(),

      images = document.querySelectorAll('img[src^="/images"], img[src*="_posts"]'),
      sitedescSep = '#',
      sitedescInt = 8000,
      sitedesc = document.getElementById('sitedesc'),
      sitedescArr = sitedesc.textContent.split(sitedescSep)

  let sitedescCounter = 0

  function changeSitedesc(newText) {
    function handler() {
      sitedesc.removeEventListener(transitionEvent, handler)
      sitedesc.textContent = newText
      Q(() => {
        sitedesc.style.opacity = 1
      })
    }
    sitedesc.addEventListener(transitionEvent, handler)
    sitedesc.style.opacity = 0
  }

  sitedesc.textContent = sitedescArr[sitedescCounter]

  setInterval(() => {
    sitedescCounter = sitedescCounter < (sitedescArr.length - 1) ?
      sitedescCounter + 1 : 0
    changeSitedesc(sitedescArr[sitedescCounter])
  }, sitedescInt)

  Array.from(images).forEach(image => {
    image.src = ~image.src.indexOf('_posts') ?
      "{{site.baseurl}}" + image.src.replace(/.+_posts/g, '/images') :
      "{{site.baseurl}}" + image.src.replace('http://leeds-ebooks.github.io', '')
  })

  Array.from(stickyElements).forEach(el => {
    stickyfill.add(el)
  })

  rivets.bind(b, model)

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
