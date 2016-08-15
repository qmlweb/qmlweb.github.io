window.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelector('#code textarea');
  var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
  });
});
