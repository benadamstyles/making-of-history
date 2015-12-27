export default function() {
  const images = Array.from(
    document.querySelectorAll('img[src^="/images"], img[src*="_posts"]')
  )

  console.info(`${images.length} replaced images`)

  images.forEach(image => {
    image.src = ~image.src.indexOf('_posts') ?
      "{{site.baseurl}}" + image.src.replace(/.+_posts/g, '/images') :
      "{{site.baseurl}}" + image.src.replace('http://leeds-ebooks.github.io', '')
  })
}
