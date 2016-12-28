function shrink() {
  var css = '\
    ._58jw { \
      font-size: 15px !important; \
      line-height: 1.38 !important; \
      font-weight: normal !important; \
    }\
  ';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
}
shrink();
