function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
      return 'Nieprawidłowe dane';
    } else {
      var value = a*h/2;
      return 'Wynik to: ' + value;
    }   
}

console.log(getTriangleArea(10,6));
console.log(getTriangleArea(0,4));
console.log(getTriangleArea(7,3));