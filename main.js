window.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelector('#code textarea');
  var debouncetimer;
  var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
  });
  
  var iframe = document.querySelector("#result iframe");
  iframe.addEventListener("load", function () {
    iframe.contentWindow.postMessage(textarea.value, "*");
  });

  var execute = function() {
    iframe.src = iframe.src;
  };

  textarea.addEventListener("change", execute);

  editor.on("change", function() {
    textarea.value = editor.getValue();
    clearTimeout(debouncetimer);
    debouncetimer = setTimeout(execute, 1000)
  });

  execute();
});
