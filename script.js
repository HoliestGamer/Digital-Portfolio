/*
  Assignment: Digital Portfolio
  Author: Nicholas Rivera
  Date: 3-3-2021
  Purpose: Stores the functions that are used for various means. 
  Template Used: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page&stacked=h
*/

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}