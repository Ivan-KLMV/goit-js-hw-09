!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.setAttribute("disabled",!0),t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r(),n=setInterval((function(){r()}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.e5434c0b.js.map