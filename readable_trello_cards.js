// ==UserScript==
// @name         Trello Card Widener
// @namespace    http://masukomi.org/
// @version      0.1
// @description  make trello cards wider
// @author       masukomi.org
// @match        https://trello.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @grant        GM_addStyle
// @sandbox      raw
// ==/UserScript==

GM_addStyle(`
.editor-sticky-toolbar {
  min-width: 90%;
}
.window-main-col {
  width: 80% !important;
}
`);
