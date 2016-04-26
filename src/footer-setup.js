export default function() {
  if (window.isArticle) {
    const els = Array.from(
            document.querySelectorAll('.post-content *')
          ),

          footerStart = els.find(({textContent}) =>
            textContent.trim().toLowerCase().startsWith('more information')
          );

    footerStart.style.fontWeight = 'bold'

    let el = footerStart

    while (el.nextElementSibling) {
      el.className += " post-footer"
      el = el.nextElementSibling
    }
  }
}
