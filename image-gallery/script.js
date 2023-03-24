const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
let eventOld = null;

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    if (eventOld != null) {
      eventOld.classList.remove('active')
    }

    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    e.target.classList.add('active');
    eventOld = e.target;
  }
});