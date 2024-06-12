// ==UserScript==
// @name         Readable Fireballs
// @namespace    http://masukomi.org/
// @version      0.1
// @description  make daring fireball content wider
// @author       masukomi
// @match        https://daringfireball.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_addStyle
// ==/UserScript==


 GM_addStyle(`
div#Main {
  width: 100% !important;
}
`);
