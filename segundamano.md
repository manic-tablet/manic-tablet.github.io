---
title: Segunda Mano
layout: default
permalink: /segundamano/
---

<!-- Segunda mano -->
<div id="SegundaMano" class="container p-5">

<h2 class="display-2 text-center text-uppercase mb-5">{{ page.title }}</h2>

<nav class="breadcrumb mt-5">
  <a class="breadcrumb-item" href="{{ "/" | relative_url }}">Inicio</a>
  <span class="breadcrumb-item active">{{ page.title }}</span>
</nav>

  <div class="row">
    <div class="card-deck mx-auto">
      {% for p in site.segundamano %}
        {% if site.segundamano.size == 1 %}
          <div class="col-sm-6 col-lg-6">
        {% else %}
          <div class="col-sm-6 col-lg-3">
        {% endif %}
            {% include segundamano-card.html %}
          </div>
      {% endfor %}
    </div>
  </div>
</div>
