(function() {
  'use strict';
  var QMLEngine = window.QmlWeb ? QmlWeb.QMLEngine : window.QMLEngine;

  var log = document.createElement('div');
  log.id = 'log';
  log.style.padding = '5px';
  log.style.backgroundColor = '#333';

  var colors = {
    error: '#f00',
    warn: '#e80',
    debug: '#999',
    info: '#77f',
    log: '#fff'
  };

  var consoleOrig = window.console;
  window.console = {};
  Object.keys(consoleOrig).forEach(function(level) {
    console[level] = function() {
      var args = Array.prototype.slice.call(arguments);
      consoleOrig[level].apply(consoleOrig, args);

      var p = document.createElement('p');
      p.style.color = colors[level] || colors.log;
      p.style.margin = '0px';
      var text = document.createTextNode(args.join(' '));
      p.appendChild(text);
      log.appendChild(p);
    };
  });

  window.addEventListener("message", function (message) {
    try {
      var qmlEngine = new QMLEngine();
      qmlEngine.loadQML(message.data);
      qmlEngine.start();
    } catch (e) {
      console.error(e);
      document.body.innerText = '';
      document.body.appendChild(log);
    }
  });
})();
