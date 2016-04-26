/* eslint-disable */

module.exports = [
  {% for hero in site.data.heroes %}
    {
      {% if hero.src contains "http://" or hero.src contains "https://" %}
      src: '{{ hero.src }}',
      {% else %}
      src: '{{ site.baseurl }}/images/{{ hero.src }}',
      {% endif %}
      title: "{{ hero.title | replace: '"', ''' }}"
    },
  {% endfor %}
]
