"use strict";
$(document).ready(function () {
    //$("#faqs h2").click(function (evt) {
        //$(this).toggleClass("minus");
        //if (!$(this).hasClass("minus")) {
            //$(this).next().hide();
        //}
        //else {
            //$("#faqs h2").removeClass("minus");
            //$("#faqs h2+ div").hide();
            //$(this).addClass("minus");
            //$(this).next().show();
        //}
        //evt.preventDefault();
    //}); // end click
    //$("#faqs").find("a:first").focus();


       // Initialize the Accordion widget
  $("#faqs").accordion({
    heightStyle: "content",  // Set the height of each panel to fit its content
    collapsible: true,       // Allow all panels to be collapsed
    active: false,           // Start with all panels collapsed
    animate: 200             // Set the duration of the animation
  });


  $("#faqs").accordion("option", "active", 0);

 
  $("#faqs").find("a:first").focus();
    }); // end ready
    



