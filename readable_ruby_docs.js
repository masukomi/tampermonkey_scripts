// ==UserScript==
// @name         Readable Ruby Docs
// @namespace    https://masukomi.org/
// @version      0.1
// @description  make the core description text wider
// @author       masukomi
// @match        https://ruby-doc.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ruby-doc.org
// @grant        GM_addStyle
// @sandbox      raw
// ==/UserScript==

GM_addStyle(`
/* .class #documentation,
.file #documentation,
.module #documentation,*/

.adzbox {
display: none;
}

#documentation {
min-width: 900px !important;
max-width: 999999px;
/*margin: 0rem 1rem 5rem 5rem !important;*/
}

#metadata{
/* fit-content makes it too wide because of invisible things*/
min-width: 15rem !important;
margin-right: 2rem !important;
}

div.wrapper {
margin-left: 2rem !important;
}
.adzbox{
display: none;
}

`);
