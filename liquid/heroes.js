/* eslint-disable */

module.exports = [
  {% for hero in site.data.heroes %}
    {% if hero.src contains "http://" or hero.src contains "https://" %}
    {
      src: '{{ hero.src }}',
      w: {{ hero.w }},
      h: {{ hero.h }}
    },
    {% else %}
    {
      src: '{{ site.baseurl }}/images/{{ hero.src }}',
      w: {{ hero.w }},
      h: {{ hero.h }}
    },
    {% endif %}
  {% endfor %}
]
