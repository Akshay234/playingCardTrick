var getNumbers = function () {
  var numbers = [];
  for (var i = 1; i < 22; i++) {
    numbers.push(i);
  }
  return numbers;
};

var showCards = function () {
  var container = d3.select('body');
  // .append('div').style('width', '1500px').style('height', '300px').style('display', '-webkit-box');
  container.selectAll('div')
    .data(getNumbers())
    .enter()
    .append('div')
    .attr('id', function (n) {
      return n;
    })
    .style('width', '200px')
    .style('height', '300px')
    .style('border', 'solid black')
    .style('margin-left', '10px')

}();


