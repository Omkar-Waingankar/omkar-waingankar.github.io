import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import App from './App';
import $ from "jquery";
// import fadeQueue from "jquery";

ReactDOM.render(<App />, document.getElementById('root'));

$('.intro-scroll').click(function(e){
      var jump = $(this).attr('href');
      var new_position = $(jump).offset();
      $('html, body').stop().animate({ scrollTop: new_position.top - 125}, 1000);
      e.preventDefault();
});

$('.scroll_to').click(function(e){
      var jump = $(this).attr('href');
      var new_position = $(jump).offset();
      $('html, body').stop().animate({ scrollTop: new_position.top}, 1000);
      e.preventDefault();
});

// $('.intro').fadeQueue();



// $('.name').each( function(i){
// 	$(this).animate({'opacity': '1'}, 1000);
// });

// $(document).ready(function() {
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'}, 1500);
//             }
//         }); 
//     });
// });

/*Fade In Animation Sourced From https://jsfiddle.net/tcloninger/e5qaD/*/

