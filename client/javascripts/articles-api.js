// jshint esversion: 6

let controller = function(){

/*
    let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();
    */
    let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

    //clear old photos
    //$(".photos").???("");

  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article ${firstArticle.id}
  Title: ${firstArticle.title}
  Content: ${firstArticle.content}`);


    response.forEach(function(item, index) {
      let newDiv = document.createElement("div");

      document.querySelector(".articles").appendChild(newDiv);

      let newH3 = document.createElement("h3");
      newH3.textContent = `Article ${item.id}`;
      newDiv.appendChild(newH3);

      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = item.title;
      newDiv.appendChild(titleParagraph);

      let bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = item.content;
      newDiv.appendChild(bodyParagraph);

      /*
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
      */
    });



  });
};


$(document).ready(controller);


//without using jQuery
window.addEventListener("load", function() {
 //select the button and register the handler
 document.querySelector("button").addEventListener("click",
 controller);
});
