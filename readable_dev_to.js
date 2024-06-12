// ==UserScript==
// @name         Readable Dev.to
// @namespace    http://masukomi.org/
// @version      0.1
// @description  makes dev.to articles more readable
// @author       masukomi
// @match        https://dev.to/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dev.to
// @grant        GM_addStyle
// ==/UserScript==

 GM_addStyle(`
#article-body {
  padding: 1rem;
}
.crayons-layout{
  margin: 0 !important;
}
@media (min-width: 1024px)
.crayons-layout--article {
  --layout-gap: var(--su-4);
  --layout-sidebar-right-width: 0;
  --layout-sidebar-left-row-end: initial;
  --layout-content-width: 7fr;
  --layout: var(--layout-sidebar-left-width) var(--layout-content-width) var(--layout-sidebar-right-width);
}
.crayons-article__main{
  padding: revert !important;
}
`);
