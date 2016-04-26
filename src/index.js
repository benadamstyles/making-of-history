import 'babel-polyfill'
import 'classlist-polyfill'
import 'sightglass'
import _ from 'lodash'
import rivets from 'rivets'
import Stickyfill from 'stickyfill'
import model from './model'
import hero from './hero'
import initSiteDesc from './site-desc'
// import imageReplace from './image-replace'
import footerSetup from './footer-setup'
import photoswipeSetup from './photoswipe-setup'
import {$, $$} from './util'
import './config'
import heroes from '../liquid/heroes'
import runGallery from './gallery'
import imagesLoaded from 'imagesloaded'

function init() {
  hero()
  initSiteDesc()
  // imageReplace()
  footerSetup()

  const b = document.getElementsByTagName('body')[0],
        width = window.innerWidth ||
                document.documentElement.clientWidth ||
                b.clientWidth;

  if (width > 760) {
    const stickyfill = Stickyfill()
    $$('.sticky').forEach(el => stickyfill.add(el))
  }

  if (window.isGallery) {
    const div = $('.thumbnails'),
          thumbs = $$('.pswp-thumb'),
          images = heroes.map(({src, title}, i) => ({
            src,
            title,
            w: thumbs[i].naturalWidth,
            h: thumbs[i].naturalHeight
          }));

    const galleryRunner = _.partial(runGallery, div)
    imagesLoaded(div, () => {
      photoswipeSetup(div, thumbs, images)
      galleryRunner()
    })
    window.addEventListener('resize', _.throttle(galleryRunner, 100, {leading: false}))
  }

  if (window.isArticle) {
    const div = $('.post-content'),
          thumbs = $$('.post-content img'),
          images = thumbs.map(({src, naturalWidth, naturalHeight}) => ({
            src,
            w: naturalWidth,
            h: naturalHeight
          }));

    imagesLoaded(div, () => {
      photoswipeSetup(div, thumbs, images)
    })
  }

  rivets.bind(b, model)

  // window.rivets = rivets
  // window.model = model

  document.removeEventListener("DOMContentLoaded", init, false)
}

document.addEventListener('DOMContentLoaded', init, false)
