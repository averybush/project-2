// jshint esversion: 6

let controller = function(){

    let prefixURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    //let flickerTag = document.querySelector('input[type=text]').value;
    //WHAT 3 LETTERS GO IN THE ???
  //  let flickrTag = document.querySelector("input[type=text]").value();
  let flickrTag = $("input").val();
    console.log(flickrTag);
    //  let flickrTag = $("input").v??();
    let requestURL = prefixURL + flickrTag + suffixURL;
    console.log(requestURL);

    //clear old photos
    //document.querySelector(".photos").innerHTML ="";
    $(".photos").html("");

  $.getJSON(requestURL, function(flickrResponse) {
    flickrResponse.items.forEach(function(item, index) {

      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the controller
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });

  });
};



//$(document).ready(controller);

                                                                                                                                                                                                                                                                                                                      // NOTE:    // NOTE:
//without using jQuery
window.addEventListener("load", () => {
 //select the button and register the handler
 let button = document.querySelector("button");
 button.addEventListener("click", controller);
});
