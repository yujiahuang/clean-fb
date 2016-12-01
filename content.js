window.onload = function() {
  setInterval(function() {
    var paragraphs = document.querySelectorAll("._58jw");
    for(var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontSize = "15px";
      paragraphs[i].style.lineHeight = 1.38;
    }
  }, 1000);
}
