import {$} from './util'
import PhotoSwipe from 'photoswipe'
import psui from 'photoswipe/dist/photoswipe-ui-default'

function thumbBounds(el) {
  const pageYScroll = window.pageYOffset ||
          document.documentElement.scrollTop,
        rect = el.getBoundingClientRect();

  return {
    x: rect.left,
    y: rect.top + pageYScroll,
    w: rect.width
  }
}

export default function(div, thumbs, images) {
  const photoswipeEl = $('.pswp'),
        getThumbBoundsFn = i => thumbBounds(thumbs[i]);

  div.addEventListener('click', event => {
    const index = thumbs.indexOf(event.target)
    if (index >= 0) {
      const options = {index, getThumbBoundsFn},
            pswp = new PhotoSwipe(photoswipeEl, psui, images, options);
      pswp.init()
    }
  })
}
