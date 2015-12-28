import 'babel-polyfill'
import 'classlist-polyfill'
import 'sightglass'
import rivets from 'rivets'
import Stickyfill from 'stickyfill'
import model from './model'
import initSiteDesc from './site-desc'
import imageReplace from './image-replace'
import hero from './hero'
import {$, $$} from './util'
import './config'
import PhotoSwipe from 'photoswipe'
import psui from 'photoswipe/dist/photoswipe-ui-default'
import items from '../liquid/heroes'

function init() {
  const b = document.getElementsByTagName('body')[0],
        stickyElements = $$('.sticky'),
        stickyfill = Stickyfill(),
        pswp = $('.pswp');

  hero()
  initSiteDesc()
  imageReplace()

  stickyElements.forEach(el => stickyfill.add(el))

  if (pswp) {
    const options = {},
          gallery = new PhotoSwipe(pswp, psui, items, options);

    gallery.init()
  }

  rivets.bind(b, model)

  window.rivets = rivets
  window.model = model

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
