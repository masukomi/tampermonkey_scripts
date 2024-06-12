// ==UserScript==
// @name         Stack Overflow sidebar removal
// @namespace    http://masukomi.org/
// @version      0.1
// @description  try to take over the world!
// @author       masukomi
// @match        https://stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
#mainbar, .mainbar { width: 100% }
#sidebar, .sidebar { display: none}
`);
