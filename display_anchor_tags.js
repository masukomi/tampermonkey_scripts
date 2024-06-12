// ==UserScript==
// @name         display anchor tags without links
// @namespace    http://masukomi.org/
// @version      2024-06-09
// @description  make sure all anchor tags have something you can click on
// @author       masukomi
// @match        https://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


  var elements = document.getElementsByTagName("a");
  var matches = [];

  for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      //console.log(element);

   if (element.href == "" && element.name != ""){
       matches.push(element);
   }

  }
  for (let i = 0; i < matches.length; i++ ){
      let match = matches[i];

    match.insertAdjacentHTML(
        "beforeBegin", // see https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
        `<a href="${document.location.origin}/${document.location.pathname}#${match.name}" style="float: inline-start; margin-right: 0.5rem;">🔗</a>`
      )

  }

})();
