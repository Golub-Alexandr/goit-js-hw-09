const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;const o=function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`};t.addEventListener("click",(function(){t.disabled=!0,n=setInterval(o,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.328099a4.js.map
