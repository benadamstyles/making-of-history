export default function() {
  const images = document.querySelectorAll('img[src^="/images"], img[src*="_posts"]')

  Array.from(images).forEach(image => {
    image.src = ~image.src.indexOf('_posts') ?
      "{{site.baseurl}}" + image.src.replace(/.+_posts/g, '/images') :
      "{{site.baseurl}}" + image.src.replace('http://leeds-ebooks.github.io', '')
  })
}
