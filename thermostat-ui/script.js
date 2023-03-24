let temp = {
  f: 72,
  c: function () {
    return Math.round((this.f - 32) * (5 / 9));
  }
}

document.getElementById('F').innerHTML = temp.f + '&deg;F';
document.getElementById('C').innerHTML = temp.c() + '&deg;C';

function warmer() {
  temp.f++;
  document.getElementById('F').innerHTML = temp.f + '&deg;F';
  document.getElementById('C').innerHTML = temp.c() + '&deg;C';
}

function cooler() {
  temp.f--;
  document.getElementById('F').innerHTML = temp.f + '&deg;F';
  document.getElementById('C').innerHTML = temp.c() + '&deg;C';
}
