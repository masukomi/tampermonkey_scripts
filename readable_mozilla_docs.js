// ==UserScript==
// @name         Mozilla Docs Sidebar Removal
// @namespace    http://masukomi.org/
// @version      2024-06-18
// @description  remove useless sidebary so that i can have space to read content.
// @author       You
// @match        https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
#content {
  min-width: fit-content;
}
.main-wrapper {
  display: flex;
}
`);
