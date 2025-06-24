export const CUSTOM_BODY_HTML = `
<!-- Здесь можно вставить любой код для body, например, пиксели, баннеры и т.д. -->
<script>
  // Указание ID Яндекс.Метрики
  var yandexMetricaID = 102422498;

  // Функция для извлечения параметра из URL
  function getUrlParameter(name) {
    // Экранируем спецсимволы в имени параметра
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Функция для извлечения значения из utm_content
  function extractSourceFromUtmContent(utmContent) {
    if (!utmContent) return null;
    var match = utmContent.match(/\|source:([^|]+)\|/);
    return match ? match[1] : null;
  }

  // Функция для извлечения значения source из URL
  function getSourceFromUrl() {
    var utmContent = getUrlParameter('utm_content');
    var source = extractSourceFromUtmContent(utmContent);
    if (source) {
      return source;
    }
    return getUrlParameter('source');
  }

  // Функция, которая будет выполняться после загрузки Яндекс.Метрики
  function afterYandexMetricaLoaded() {
    ym(yandexMetricaID, 'getClientID', function(clientID) {
      console.log("ClientID:", clientID);

      var source = getSourceFromUrl();
      console.log("Source:", source);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.ipify.org?format=json', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          var ipAddress = response.ip;
          console.log("IP Address:", ipAddress);

          var params = {
            clientID: clientID,
            IP: ipAddress
          };
          
          if (source && source !== 'none' && source !== 'null') {
            params.source = source;
          }

          ym(yandexMetricaID, "params", params);
        }
      };
      xhr.send();
    });
  }

  // Подписываемся на событие загрузки Яндекс.Метрики
  document.addEventListener('DOMContentLoaded', afterYandexMetricaLoaded);
</script>

`; 