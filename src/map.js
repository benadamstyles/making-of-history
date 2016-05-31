import googlemaps from 'google-maps'
import dedent from 'dedent'
import articles from '../liquid/articles'
import geocodes from '../liquid/geocodes'

googlemaps.KEY = 'AIzaSyAzKKPS4jEeie2IDq57BXYZILzbJhZCctE'
googlemaps.LANGUAGE = 'en'

export default function(container) {
  googlemaps.load(google => {
    const maps = google.maps,
          geocoder = new maps.Geocoder(),
          map = new maps.Map(container, {
            center: new maps.LatLng(20, 0),
            zoom: 1,
            mapTypeId: maps.MapTypeId.TERRAIN,
            scrollwheel: false
          }),
          infoWindows = [];

    function geocode(address) {
      return new Promise((resolve, reject) => {
        geocoder.geocode(
          {address},
          (res, status) => {
            if (status === maps.GeocoderStatus.OK) {
              resolve(res[0].geometry.location)
            } else {
              reject(status)
            }
          }
        )
      })
    }

    function getHandler(infoWindow, marker) {
      return function() {
        infoWindows.forEach(infoWindow => infoWindow.close())
        infoWindow.open(map, marker)
      }
    }

    articles.forEach(async ({title, location, url, authors, period}) => {
      try {
        const infoWindow = new maps.InfoWindow({
                content: dedent`
                  <h2>
                    <a href="${url}">${title}</a>
                  </h2>
                  <p>
                    <strong>${period}</strong>
                  </p>
                  <p>
                    by ${
                      authors
                      .map(author => `<a href="${author.url}">${author.name}</a>`)
                      .join(', ')
                    }
                  </p>
                `
              }),
              marker = new maps.Marker({
                map,
                position: await geocode(location)
              });

        infoWindows.push(infoWindow)

        marker.addListener('click', getHandler(infoWindow, marker))
        marker.addListener('mouseover', getHandler(infoWindow, marker))
      } catch (e) {
        console.error(e)
      }
    })
  })
}
