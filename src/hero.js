import _ from 'underscore-contrib'
import {$} from './util'

export default function() {
  const div = $('.hero')

  if (div) {
    const srcs = ['{{ site.data.heroes | join: "', '" }}'], // FIXME
          src = _.sample(srcs);

    div.style.backgroundImage = `url("${
      src.startsWith('http') ? '' : '{{ site.baseurl }}/images/'
    }${src}")`
  }
}
