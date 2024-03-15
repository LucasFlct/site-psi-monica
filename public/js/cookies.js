function cookies(functions) {
  const container = document.querySelector('#cookies-container');
  const save = document.querySelectorAll('.cookies-save');
  if (!container || !save) return null;

  const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
  if (localPref) activateFunctions(localPref);

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter((el) => el.checked)
      .map((el) => el.getAttribute('data-function'));
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none';
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
  }

  save.forEach((save) =>
  save.addEventListener('click', handleSave)
  );
}

function marketing() {

  var pixelScript = document.querySelector('#pixelScript')
  var pixelNoScript = document.querySelector('#pixelNoScript')
  
  var contentScriptPixel = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '406578002023823');fbq('track', 'PageView');"
  var contentNoScriptPixel = '<img height="1" width="1" style="display:none"  src="https://www.facebook.com/tr?id=406578002023823&ev=PageView&noscript=1" />'

   pixelScript.innerHTML = contentScriptPixel
   pixelNoScript.innerHTML = contentNoScriptPixel
}

function analytics() {
  
  var tagManagerScript = document.querySelector('#tagManagerScript')
  var tagManagerNoScript = document.querySelector('#tagManagerNoScript')

  var contentScript = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TB3T289D');"
  var contentNoScript = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB3T289D"  height="0" width="0" style="display:none;visibility:hidden"></iframe>'

  tagManagerScript.innerHTML = contentScript
  tagManagerNoScript.innerHTML = contentNoScript

}

cookies({
  marketing,
  analytics,
});
