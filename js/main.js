(function(){
  domReady(init);

  function domReady(callback) {
    var readyStates = ['interactive', 'complete'];
    readyStates.indexOf(document.readyState > -1) ? callback() : document.addEventListener('DOMContentLoaded', callback);
  }

  function init() {
    var logo = document.getElementById('logo');
    var wordsLabel = document.getElementById('words');

    var toggleTheme = function() {
      var randomColor = getRandomColor();
      logo.style.background = randomColor;
      wordsLabel.innerHTML = words(6).join(' ');
    };

    var getRandomColor = function() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    logo.addEventListener('click', function(e) {
      toggleTheme();
    }, false);

    toggleTheme();
  }
})();