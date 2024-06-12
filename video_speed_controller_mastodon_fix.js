// ==UserScript==
// @name         Video Speed Controller Mastodon Fix
// @namespace    http://masukomi.org/
// @version      2024-04-25
// @description  fixes the display of VSC controller on mastodon
// @author       masukomi@masukomi.org
// @match        https://connectified.com/* https://dice.camp/*
// NOTE: change the @match line above to match your mastodon instance
// @icon         https://www.google.com/s2/favicons?sz=64&domain=connectified.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.vsc-controller {
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 10px 10px 15px;
  cursor: default;
  z-index: 9999999;
}
`);
