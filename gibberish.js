console.log('Running jQuery');

$(function () {
  $('p').addClass('text');
  $('ul li').addClass('spaced');
  $('.important').addClass('highlighted');
  $('div img').parent().addClass('bordered');
  $('div img').siblings().addClass('centered');
  $('div img').first().parent().addClass('left');
  $('div img').last().parent().addClass('right');
  $('ol').children().filter('li:nth-child(2n)').addClass('distinct');
  $('#key').addClass('blue');
  $('div p #key').siblings('em').addClass('bold');
});
