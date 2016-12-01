function shrink() {
  var paragraphs = document.querySelectorAll("._58jw");
  for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "15px";
    paragraphs[i].style.lineHeight = 1.38;
    paragraphs[i].style.fontWeight = "normal";
  }
}
// window.onload = function() {
  shrink();
  setInterval(shrink, 1000);
// }