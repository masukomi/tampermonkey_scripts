// ==UserScript==
// @name         Readable Ruby Guides
// @namespace    https://masukomi.org/
// @version      0.1
// @description  make the core description text wider
// @author       You
// @match        https://guides.rubyonrails.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=guides.rubyonrails.org
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`

#mainCol {
  max-width: 990px !important;
}
#container > div:nth-child(1) {
  max-width: none !important;
}

`);
