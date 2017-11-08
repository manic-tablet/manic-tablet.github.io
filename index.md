---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<!-- About Us -->
<div id="about" class="container p-5">
  <div class="row">
    <div class="col">

      <article>
        <header class="text-center mb-5">
          <h1 class="mb-5 display-1">UNA NUEVA FORMA DE COMPRA</h1>
          <p class="lead">A principios del 2014 <b>Manic Tablet</b> nace de la pasión por las nuevas tecnologías. Una pasión con el objetivo de enseñar a cada persona, de cualquier edad, como sacar el máximo partido de sus dispositivos. Ya sean, <a href="/iphone">móviles</a>, <a href="/ipad">tabletas</a>, <a href="/mac">ordenadores</a>… o todo <a href="/accesorios">tipo de aparato</a> relacionado con las nuevas tecnologías.</p>
        </header>
        <main>
          <h2 class="text-center mb-5">¿Porque elegir <b>Manic Tablet</b>?</h2>
          <p>En <b>Manic Tablet</b> ofrecemos una nueva forma de compra.</p>
          <p>Evitamos que seas un solo cliente mas. Le damos mas importancia al servicio de postventa que a la propia venta. Nos preocupamos de que el cliente sea capaz de sacarle el máximo rendimiento a su producto.</p>
          <p>Para ello por la compra de cualquier producto, ofrecemos un <b>curso gratuito</b> a cada uno de nuestros clientes. Un curso individual adecuado a sus necesidades, en el que se resolverán todas las dudas, y de esta manera puedan comenzar con sus primeros pasos, aprendiendo a manejar su nuevo dispositivo.</p>
          <p>Por otro lado al comprar los productos en la tienda, evitamos los intermediarios para que puedan recibir un <b>mejor precio</b>.</p>
          <p>Y también disfrutarán de una <b>atención personalizada</b> en cualquier momento para solucionar todos los futuros problemas</p>
        </main>
        <footer class="mt-5">
        <figure class="figure d-block mx-auto">
          <img src="/assets/manic-tablet-logo.svg" class="figure-img img-fluid" alt="{{ site.title }}">
        </figure>
        </footer>
      </article>
    </div>
  </div>
</div>
<!-- End About Us -->

<hr>

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
