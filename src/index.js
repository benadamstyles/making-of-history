import 'babel-polyfill'
import 'classlist-polyfill'
import 'sightglass'
import _ from 'underscore-contrib'
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
import runGallery from './gallery'

function init() {
  hero()
  initSiteDesc()
  imageReplace()

  const b = document.getElementsByTagName('body')[0],
        gallery = $('.pswp'),
        width = window.innerWidth ||
          document.documentElement.clientWidth ||
          b.clientWidth;

  if (width > 760) {
    const stickyfill = Stickyfill()
    $$('.sticky').forEach(el => stickyfill.add(el))
  }

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

    const galleryRunner = _.partial(runGallery, div)

    galleryRunner()

    window.addEventListener('resize', _.throttle(galleryRunner, 100, {leading: false}))
  }

  rivets.bind(b, model)

  // window.rivets = rivets
  // window.model = model

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
