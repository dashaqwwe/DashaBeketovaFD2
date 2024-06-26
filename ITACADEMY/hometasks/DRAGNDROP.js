function elements() {
  const img = document.getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    const _img = img[i];
    _img.onmousedown = function (e) {
      let coords = getCoords(_img);
      let shiftX = e.pageX - coords.left;
      let shiftY = e.pageY - coords.top;

      _img.style.position = "absolute";
      document.body.appendChild(_img);
      moveAt(e);

      _img.style.zIndex = 1;

      function moveAt(e) {
        _img.style.left = e.pageX - shiftX + "px";
        _img.style.top = e.pageY - shiftY + "px";
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      _img.onmouseup = function () {
        document.onmousemove = null;
        _img.onmouseup = null;
      };
    };

    _img.ondragstart = function () {
      return false;
    };

    function getCoords(elem) {
      let box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    }
  }
}
window.onload = () => {
  elements();
};
