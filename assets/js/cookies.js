<!-- cookie -->
{{ if site.Params.cookies.enable }}
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NX68GE0KX2"></script>
<script>
  function googlean() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NX68GE0KX2');
  }
  function EditCookies() {
    var formopt = document.getElementById("config-cookies");
    formopt.style.display = "block";
    var formopt = document.getElementById("js-cookie-box");
    formopt.style.top = "10%";
    formopt.style.maxHeight = "88%";
    var formopt = document.getElementById("js-cookie-button-custom");
    formopt.style.display = "none";
    var formopt = document.getElementById("js-cookie-button-cancel");
    formopt.style.display = "block";
  }
  function ApplyCookies() {
    var checkbox=document.getElementById('switch-label2');
    if (checkbox.checked)
    {
      googlean();
    }
  }
  function ApplyAll() {
    googlean();
  }
</script>
<div id="js-cookie-box-overlay" class="overlay hide-overlay">
  <div id="js-cookie-box" class="cookie-box cookie-box-hide">
    <h4>¡Bienvenido a laroite!</h4>
    <br>
    <h5>Selecciona tus preferencias de cookies:</h5>
  	<p><B>Esta página web usa cookies.</B> Las cookies de este sitio web se utilizan para obtener estadísticas anónimas, lo que nos permite medir el número de visitantes y la repercusión que está teniendo nuestro contenido. Estos datos son procesados por Google, la empresa que nos provee el servicio de rastreo y analíticas. No utilizamos estos datos para ningún otro fin, ni los compartimos con terceros.</p>
    <p></p>
    <form id="config-cookies" onSubmit="ApplyCookies()">
      <div class="switch-button">
        <input type="checkbox" name="switch-button-disabled" id="switch-label" class="switch-button__checkbox switch-button__disabled" checked disabled>
        <label for="switch-label" class="switch-button__label switch-button__disabled"></label>
        <p class="switch-text"><B>Cookies operativas:</B> Las cookies operativas son necesarias para que esta página web sea utilizable. Se han incluido únicamente para poder omitir este mismo menú que le permite configurar las preferencias de cookies, en el caso de que ya las haya configurado anteriormente.</p>
      </div>
      <div class="switch-button">
        <input type="checkbox" name="switch-button-google" id="switch-label2" class="switch-button__checkbox">
        <label for="switch-label2" class="switch-button__label"></label>
        <p class="switch-text"><B>Cookies de estadísticas:</B> Las cookies de estadísticas las empleamos para conocer el número de visitantes que tiene la página web y la forma en la que interactúan los visitantes. La información que se reúne es anónima. En nuestro caso utilizamos para este fin <B>Google Tag Manager</B> y la herramienta <B>Google Analytics</B>. Para más información, consulte aquí la <a href="https://policies.google.com/privacy">política de privacidad de Google</a>.</p>
      </div>
      <input id="js-cookie-button-customize" class="btn btn-sm btn-outline-primary ml-2" type="submit" value="Permitir la selección">
    </form>
    <form id="allow-all-cookies" onSubmit="ApplyAll()">
      <input id="js-cookie-button" class="btn btn-sm btn-outline-primary ml-2" type="submit" value="Acepto">
      <span id="js-cookie-button-custom" onclick="EditCookies()" class="btn btn-sm btn-outline-primary ml-2 right-button">Personalizar</span>
      <span id="js-cookie-button-cancel" class="btn btn-sm btn-outline-primary ml-2 right-button">Rechazar todo</span>
    </form>
  </div>
</div>
<script>
	(function ($) {
		const cookieBox = document.getElementById('js-cookie-box');
    const cookieBoxOverlay = document.getElementById('js-cookie-box-overlay');
		const cookieButton = document.getElementById('js-cookie-button');
    const cookieButtonCustomize = document.getElementById('js-cookie-button-customize');
    const cookieButtonCancel = document.getElementById('js-cookie-button-cancel');
		if (!Cookies.get('cookie-box')) {
			cookieBox.classList.remove('cookie-box-hide');
      cookieBoxOverlay.classList.remove('hide-overlay');
			cookieButton.onclick = function () {
				Cookies.set('cookie-box', true, {
					expires: {{ site.Params.cookies.expire_days }}
				});
				cookieBox.classList.add('cookie-box-hide');
        cookieBoxOverlay.classList.add('hide-overlay');
			};
      cookieButtonCustomize.onclick = function () {
				Cookies.set('cookie-box', true, {
					expires: {{ site.Params.cookies.expire_days }}
				});
				cookieBox.classList.add('cookie-box-hide');
        cookieBoxOverlay.classList.add('hide-overlay');
			};
      cookieButtonCancel.onclick = function () {
				Cookies.set('cookie-box', true, {
					expires: {{ site.Params.cookies.expire_days }}
				});
				cookieBox.classList.add('cookie-box-hide');
        cookieBoxOverlay.classList.add('hide-overlay');
			};
		}
	})(jQuery);
</script>

<!-- cookie style -->
<style>
.cookie-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 9999;
  padding: 1rem 2rem;
  background: rgb(71, 71, 71);
  transition: all .75s cubic-bezier(.19, 1, .22, 1);
  color: #fdfdfd;
}

.cookie-box-hide {
  display: none;
}
</style>
{{ end }}