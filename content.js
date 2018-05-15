function betterReading() {
  var css = '\
    ._58jw { \
      font-size: 15px !important; \
      line-height: 1.38 !important; \
      font-weight: normal !important; \
    }\
    ._5v3q ._5pbx p {\
      line-height: 1.4;\
      margin: 20px 0;\
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
betterReading();
