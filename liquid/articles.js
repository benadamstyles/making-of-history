/* eslint-disable */

module.exports = [
  {% for post in site.posts %}

    {% assign authors = '' | split: ',' %}

    {% for author in site.authors %}
      {% if post.author contains author.value %}
        {% assign authors = authors | push: author %}
      {% endif %}
    {% endfor %}

    {
      title: "{{ post.title | smartify }}",
      url: "{{ post.url }}",
      authors: [
        {% for author in authors %}
          {
            name: "{{ author.name }}",
            url: "{{ author.value | prepend: '/authors/' | prepend: site.baseurl }}"
          },
        {% endfor %}
      ],
      period: "{{ post.period }}",
      location: "{{ post.location }}"
    },
  {% endfor %}
]
