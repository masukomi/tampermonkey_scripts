// ==UserScript==
// @name         Kill Autopian Video
// @version      2024-05-16
// @namuspace    https://masukomi.org/
// @description  die autoplay popup die!
// @author       You
// @match        https://www.theautopian.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=theautopian.com
// @grant        none
// ==/UserScript==

(function() {
      setTimeout(function(){
        //alert("start");
        document.getElementById("__exco_root_container").parentElement.parentElement.setAttribute("style", "display: none;");
      }, 500);

})();
