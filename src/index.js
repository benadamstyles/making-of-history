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
        gallery = $('.pswp');

  hero()
  initSiteDesc()
  imageReplace()

  stickyElements.forEach(el => stickyfill.add(el))

  if (gallery) {
    const thumbs = $$('.pswp-thumb'),
          div = $('.thumbnails'),
          getThumbBoundsFn = i => {
            const thumb = thumbs[i],
                  pageYScroll = window.pageYOffset ||
                    document.documentElement.scrollTop,
                  rect = thumb.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            }
          };

    div.addEventListener('click', e => {
      const index = thumbs.indexOf(e.target)
      if (index >= 0) {
        const options = {index, getThumbBoundsFn},
              pswp = new PhotoSwipe(gallery, psui, items, options);
        pswp.init()
      }
    })
  }

  rivets.bind(b, model)

  window.rivets = rivets
  window.model = model

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
