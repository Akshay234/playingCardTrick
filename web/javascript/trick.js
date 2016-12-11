var getNumbers = function () {
  var numbers = [];
  for (var i = 1; i < 22; i++) {
    numbers.push(i);
  }
  return numbers;
};

var showCards = function () {
  var numbers = getNumbers();
  var container = d3.select('body');

  var divs = container.selectAll('div')
    .data(numbers)
    .enter()
    .append('div')
    .attr('id', function (n) {
      return n;
    })
    .text(function (n) {
      return n;
    });
}();



document.onclick = function (hash) {
  var element = hash.toElement.innerHTML;

  window.alert("you select "+ element)
};


