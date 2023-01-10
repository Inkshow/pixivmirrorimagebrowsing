function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
function log(a) {
  console.log(a);
}
let id = GetQueryString("q");
let flag = false;
let count = 1;
let i = setInterval(() => {
  if (flag) {
    clearInterval(i);
  } else {
    if (count == 1) {
      count++;
      $("#imgs").append(
        '<li class="ax-flex-block ax-radius-md ax-fadeInDown"><img src="https://pixiv.re/' +
          id +
          '.png" onerror="imgError(this);"/></li>'
      );
    } else {
      $("#imgs").append(
        '<li class="ax-flex-block ax-radius-md ax-fadeInDown"><img src="https://pixiv.re/' +
          id +
          "-" +
          count +
          '.png" onerror="imgError(this);"/></li>'
      );
      count++;
    }
  }
}, 100);
function imgError(image) {
  console.log("a");
  $(image).parent().remove();
  flag = true;
}
