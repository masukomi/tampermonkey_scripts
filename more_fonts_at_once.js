// ==UserScript==
// @name         more fonts at once
// @namespace    http://masukomi.org/
// @version      0.1
// @description  more search results at a time on 1001fonts.com
// @author       You
// @match        https://www.1001fonts.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1001fonts.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var numFonts = 1000
    var select=document.getElementById('per-page-fonts-select')
    var opt = document.createElement('option');
    opt.value = numFonts;
    opt.innerHTML = numFonts;
    select.appendChild(opt);
    // Your code here...
})();
