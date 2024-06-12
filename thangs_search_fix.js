// ==UserScript==
// @name         Thangs Search Fix
// @namespace    http://masukomi.org/
// @version      2024-04-25
// @description  moves the search box to make it usable
// @author       masukomi@masukomi.org
// @match        https://thangs.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thangs.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
html > body > div:nth-of-type(2) > div:nth-of-type(2) > div:first-of-type > div > div > div:nth-of-type(2) > div {
    display: block;
    position: absolute;
    top: 3rem;
    left: 9rem;
    width: 80%;
}
`);
