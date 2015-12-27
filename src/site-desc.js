export default function() {
  const whichTransitionEvent = () => {
      const el = document.createElement('fakeelement'),
            transitions = {
              'transition': 'transitionend',
              'OTransition': 'oTransitionEnd',
              'MozTransition': 'transitionend',
              'WebkitTransition': 'webkitTransitionEnd'
            };

      let t

      for (t in transitions) if (el.style[t] !== undefined) return transitions[t]
    },

    transitionEvent = whichTransitionEvent() || "transitionend",

    sitedescSep = '#',
    sitedescInt = 8000,
    sitedesc = document.getElementById('sitedesc'),
    sitedescArr = sitedesc.textContent.split(sitedescSep)

  let sitedescCounter = 0

  function changeSitedesc(newText) {
    function handler() {
      sitedesc.removeEventListener(transitionEvent, handler)
      sitedesc.textContent = newText
      setTimeout(() => {sitedesc.style.opacity = 1}, 1)
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
}
