---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<!-- GAMAS DE PRODUCTOS -->
<div id="compra" class="container p-5">
  <h2 class="display-3 text-center text-uppercase mb-5">Elije tu Mac</h2>
  <div class="row">
    {% assign items = site.gamas | sort: 'orden' %}
    {% include cards.html cards=items %}
  </div>
</div>

{% include promo-curso-gratis.html %}

{% include vende.html %}
