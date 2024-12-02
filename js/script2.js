(function() {
    // Wrap your code in an Immediately Invoked Function Expression (IIFE)
    // to avoid polluting the global scope and potential conflicts.
  
    document.addEventListener('DOMContentLoaded', function() {
      // Code from your script2.js here:
      var solutionBtn = document.getElementById('solution-btn');
      var imgContainer = document.getElementById('img-container');
      imgContainer.style.display = 'none'; // Hide the image
  
      solutionBtn.addEventListener('click', function() {
        if (imgContainer.style.display === 'none') {
          imgContainer.style.display = 'block'; // Show the image
        } else {
          imgContainer.style.display = 'none'; // Hide the image
        }
      });
    });
  })();
