---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<!-- MAC -->
<div id="Mac" class="container p-5">
  <h2 class="display-2 text-center text-uppercase mb-5">Elije tu Mac</h2>
  <div class="row">
    <div class="card-deck mx-auto">
      {% assign modelos = site.modelos | where: 'gama', 'Mac' | sort: 'orden' %}
      {% for m in modelos %}
          <div class="col-sm-6 col-lg-3">
            {% include model-card.html modelo=m %}
          </div>
      {% endfor %}
    </div>
  </div>
</div>

{% include promo-curso-gratis.html %}

{% include vende.html %}

<!-- Segunda mano -->
<div id="SegundaMano" class="container p-5">
  <h2 class="display-2 text-center text-uppercase mb-5">Segunda mano</h2>
  <div class="row">
    <div class="card-deck mx-auto">
      {% for p in site.segundamano limit:4 %}
        {% if site.segundamano.size == 1 %}
          <div class="col-sm-6 col-lg-6">
        {% else %}
          <div class="col-sm-6 col-lg-3">
        {% endif %}
            {% include segundamano-card.html %}
          </div>
      {% endfor %}
    </div>
    <a href="/segundamano/" class="btn btn-large btn-primary mx-auto mt-5">Ver todos</a>
  </div>
</div>
