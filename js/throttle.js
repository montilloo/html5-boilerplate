function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn();
      timer = null;
    },delay);
  }
}

const draggableBox = document.querySelector('.draggable-box');

draggableBox.addEventListener('drag', throttle(function (ev) {
  console.log('test')
}, 200))
