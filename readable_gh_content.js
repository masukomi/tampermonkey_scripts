// ==UserScript==
// @name         Readable GH Content
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes GitHub content wider
// @author       masukomi
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`

/* div.clearfix.container-xl.px-3.px-md-4.px-lg-5.mt-4 {
margin-left: 1rem !important;
max-width: fit-content !important;
} */

.container-xl {
  max-width: 100% !important;
}
`);
