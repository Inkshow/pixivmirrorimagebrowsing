let sch = new axInput("#searchinput", {
  limit: 30,
});

document.getElementById("clear").onclick = function () {
  sch.clear();
};
function search() {
  window.location.href =
    window.location.protocol +
    "//" +
    window.location.host +
    "/search.html?q=" +
    sch.getValues();
}
document.getElementById("search").onclick = function () {
  search();
};
function keyup(e) {
  var evt = window.event || e;
  if (evt.keyCode == 13) {
    search();
  }
}
