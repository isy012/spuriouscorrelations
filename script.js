nv.addGraph(function() {
  var chart = nv.models.lineChart()
    .useInteractiveGuideline(true)
    ;

  chart.xAxis
    .axisLabel('Time (ms)')
    .tickFormat(d3.format(',r'))
    ;

  chart.yAxis
    .axisLabel('Voltage (v)')
    .tickFormat(d3.format('.02f'))
    ;

  d3.select('#chart svg')
    .datum(sinAndCos())
    .transition().duration(500)
    .call(chart)
    ;

  nv.utils.windowResize(chart.update);

  return chart;
});

function sinAndCos() {
  var sin = [],
      cos = [];

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  return [
    {
      values: sin,
      key: 'Apples',
      color: '#D67F69'
    },
    {
      values: cos,
      key: 'Oranges',
      color: '#026564'
    }
  ];
}
