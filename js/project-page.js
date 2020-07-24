console.log("project page js running");
;(function () {
    'use strict';
    var galleries = document.querySelectorAll("div.gallery");
    for (var i=0; i<galleries.length; i++){
      Gallery.init(galleries[i]);
    }
  }());

  