"use strict";

$(document).ready(function(){
  //var elements = ['h1', 'h2', 'h3', 'p'];
  //console.log($(elements).length);
  var heightH1 = $('h1').height();
  var heightH2 = $('h2').height();
  var heightH3 = $('h3').height();
  var heightP = $('p').height();
  $('h1 span').html(heightH1);
  $('h2 span').html(heightH2);
  $('h3 span').html(heightH3);
  $('p span').html(heightP);

    const indicatorPosition = $('#checkPosition').offset().top;
    console.log("indicators initial position:", indicatorPosition);

    var totalScroll;

    function getScrollValue(totalScroll) {
      var checkScroll;
      window.addEventListener('scroll', function() {
          //console.log('scrolling');
      });
      $(window).scroll(checkScroll, function(){
          var checkScroll = window.scrollY;
          //console.log("scrolled:", checkScroll);
      });
      return {
          checkScroll: totalScroll
      }
    }

    getScrollValue();
    console.log("scrolled:", totalScroll);

/*  if (totalScroll > indicatorPosition) {

  }*/



});