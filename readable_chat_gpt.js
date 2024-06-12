// ==UserScript==
// @name         Readable ChatGPT
// @namespace    https://masukomi.org
// @version      0.1
// @description  make ChatGPT's UI more readable
// @author       masukomi
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.text-base {
min-width: 90%;
}
`);
