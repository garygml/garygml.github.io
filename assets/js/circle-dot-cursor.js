function init() {
  const $bigBall = document.querySelector('.circle-dot-cursor__ball--big');
  const $smallBall = document.querySelector('.circle-dot-cursor__ball--small');
  const $hoverables = document.querySelectorAll('a, button, input, textarea, select, .hoverable');

  // Check if required elements exist
  if (!$bigBall || !$smallBall) {
    console.warn('Cursor elements not found');
    return;
  }
  else {
    document.querySelectorAll('a, app-root, nav, label, .hoverable').forEach(el => {
      el.classList.add('hide-cursor');
    });
  }

  // Get SVG dimensions dynamically for centering
  const bigBallSVG = $bigBall.querySelector('svg');
  const smallBallSVG = $smallBall.querySelector('svg');
  const bigBallOffsetX = bigBallSVG ? bigBallSVG.getAttribute('width') / 2 : 15;
  const bigBallOffsetY = bigBallSVG ? bigBallSVG.getAttribute('height') / 2 : 15;
  const smallBallOffsetX = smallBallSVG ? smallBallSVG.getAttribute('width') / 2 : 5;
  const smallBallOffsetY = smallBallSVG ? smallBallSVG.getAttribute('height') / 2 : 5;

  // Timeout for detecting mouse stop
  let mouseStopTimeout;
  const mouseStopDelay = 10; // milliseconds
  let isHovering = false; // Track hover state

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - bigBallOffsetX,
      y: e.clientY - bigBallOffsetY,
      scale: isHovering ? 6 : 1.5 });

    TweenMax.to($smallBall, .1, {
      x: e.clientX - smallBallOffsetX,
      y: e.clientY - smallBallOffsetY });

    // Clear the previous timeout
    clearTimeout(mouseStopTimeout);
    
    // Set a new timeout to detect when mouse stops
    mouseStopTimeout = setTimeout(onMouseStop, mouseStopDelay);
  }

  // Mouse stopped moving
  function onMouseStop() {
    TweenMax.to($bigBall, .3, {
      scale: isHovering ? 6 : 1 });
  }

  // Hover an element
  function onMouseHover() {
    isHovering = true;
    TweenMax.to($bigBall, .3, {
      scale: 6 });

  }
  function onMouseHoverOut() {
    isHovering = false;
    TweenMax.to($bigBall, .3, {
      scale: 1 });

  }
}

// Ensure both DOM and TweenMax are loaded before initializing
function initWhenReady() {
  // Check if TweenMax is available
  if (typeof TweenMax === 'undefined') {
    console.error('TweenMax is not loaded. Make sure TweenMax.min.js is included before circle-dot-cursor.js');
    return;
  }
  
  // Check if DOM is ready and cursor element exists
  const cursorElement = document.getElementById("circle-dot-cursor");
  if (!cursorElement) {
    console.error('Element with id "circle-dot-cursor" not found');
    return;
  }
  
  // Check if circle-dot-cursor is visible (not display: none)
  if (window.getComputedStyle(cursorElement).display === 'none') {
    console.warn('circle-dot-cursor is hidden (display: none); default cursor will remain.');
    return;
  }
  
  init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhenReady);
} else {
  // DOM is already loaded, but let's wait a bit for TweenMax to be sure
  setTimeout(initWhenReady, 100);
}