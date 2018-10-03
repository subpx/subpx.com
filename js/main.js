(function(){
  domReady(init);

  function domReady(callback) {
    var readyStates = ['interactive', 'complete'];
    readyStates.indexOf(document.readyState > -1) ? callback() : document.addEventListener('DOMContentLoaded', callback);
  }

  function init() {
    var logo = document.getElementById('logo');
    var wordsLabel = document.getElementById('words');
    var count = 0;

    logo.addEventListener('click', function() {
      step();
    }, false);

    step();

    function step() {
      logo.style.background = getRandomColor();
      wordsLabel.innerHTML = words(6).join(' ');
    }

    function getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    toggleTheme();
  }
})();