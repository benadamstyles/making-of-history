import 'babelify/polyfill'

import 'sightglass'
import rivets from 'rivets'
import Stickyfill from 'stickyfill'

import model from './model'
import initSiteDesc from './site-desc'
import imageReplace from './image-replace'

import './config'

function init() {
  const b = document.getElementsByTagName('body')[0],
        stickyElements = document.getElementsByClassName('sticky'),
        stickyfill = Stickyfill();

  initSiteDesc()
  imageReplace()

  Array.from(stickyElements).forEach(el => stickyfill.add(el))

  rivets.bind(b, model)

  window.rivets = rivets
  window.model = model

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
