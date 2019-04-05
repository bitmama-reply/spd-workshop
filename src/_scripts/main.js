// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
// $(() => { });

TweenMax.to('#animate', 15, {
  rotation: 3600, 
  transformOrigin:"50% 50%",
  ease: Power4.easeOut,
});
