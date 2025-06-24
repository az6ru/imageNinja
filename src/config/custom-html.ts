export const CUSTOM_BODY_HTML = `
<!-- Здесь можно вставить любой код для body, например, пиксели, баннеры и т.д. -->
<script>
  // Указание ID Яндекс.Метрики
  var yandexMetricaID = 102422498;

  // Функция для извлечения параметра из URL
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Функция для извлечения значения из utm_content
  function extractSourceFromUtmContent(utmContent) {
    var match = utmContent.match(/\|source:([^|]+)\|/);
    return match ? match[1] : null;
  }

  // Функция для извлечения значения source из URL
  function getSourceFromUrl() {
    // Сначала ищем source в utm_content
    var utmContent = getUrlParameter('utm_content');
    var source = extractSourceFromUtmContent(utmContent);
    if (source) {
      return source;
    }
    // Если не найдено, ищем source в параметре URL
    return getUrlParameter('source');
  }

  // Функция, которая будет выполняться после загрузки Яндекс.Метрики
  function afterYandexMetricaLoaded() {
    var yaID;
    // Получение Client ID
    ym(yandexMetricaID, 'getClientID', function(clientID) {
      yaID = clientID;
      console.log("ClientID", yaID);

      // Получение значения source из URL
      var source = getSourceFromUrl();
      console.log("Source", source);

      // Получение IP-адреса
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.ipify.org?format=json', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          var ipAddress = response.ip;
          console.log("IP Address", ipAddress);

          // Создаем объект параметров
          var params = {
            clientID: yaID
          };

          // Добавляем source, если он не равен 'none' или 'null'
          if (source && source !== 'none' && source !== 'null') {
            params.source = source;
          }

          // Добавляем IP
          params.IP = ipAddress;

          // Отправка параметров на сервер
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