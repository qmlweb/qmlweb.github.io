(function() {
  var QMLEngine = window.QmlWeb ? QmlWeb.QMLEngine : window.QMLEngine;

  window.addEventListener("message", function (message) {
    var qmlEngine = new QMLEngine();
    qmlEngine.loadQML(message.data);
    qmlEngine.start();
  });
})();
