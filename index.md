---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<div class="container p-5">
  <h2 class="display-2 text-center text-uppercase mb-5">Elije tu Mac</h2>
  <div class="row">

    <div class="card-deck">
    {% for p in site.productos %}
      <div class="col-sm-6 col-lg-4">
        {% include product-card.html product=p %}
      </div>
    {% endfor %}
    </div>

  </div>
</div>
