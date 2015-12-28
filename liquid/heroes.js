/* eslint-disable */

module.exports = [
  {% for hero in site.data.heroes %}
  {% capture start %}{{ hero.src | slice: 0, 4}}{% endcapture %}
    {% if start == "http" %}
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
