import crel from 'crel'

export default function() {
  const imgs = Array.from(
    document.querySelectorAll('.post-content img')
  )

  imgs.forEach(img => {
    const hint = crel('div', {'class': 'zoom-hint ion-ios-search-strong'}),
          parent = img.parentElement;

    if (!parent.style.position || parent.style.position === 'static') {
      parent.style.position = 'relative'
    }

    Object.assign(hint.style, {
      top: '1em',
      left: 'auto',
      right: '1.25em'
    })

    parent.appendChild(hint)
  })
}
