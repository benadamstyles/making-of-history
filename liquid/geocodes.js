/* eslint-disable */

module.exports = [
  {% for geocode in site.data.geocodes %}
    {
      address: "{{ geocode.address }}",
      lat: {{ geocode.lat }},
      lng: {{ geocode.lng }}
    },
  {% endfor %}
]
