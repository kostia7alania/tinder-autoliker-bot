!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({9:function(e,t){function n(){console.log("start"),window.a=window.setInterval(function(e){window.document.querySelectorAll(".profile-action--yes")[0].click(),window.createDiv(),count++,console.log("Поставили лайков => "+count)},1e3)}function o(){console.log("stop"),clearInterval(window.a)}window.count=0,window.onload=function(){0==document.querySelectorAll(".handler").length&&createDiv()},window.createDiv=function(){var e=document.createElement("div");e.classList.add("handler"),e.style.display="flex",e.style.justifyContent="space-evenly";var t=["START","STOP"].map(function(e){var t=document.createElement("span");return t.innerText=e,t.style.cursor="pointer",t.style.border="3px white solid",t.style.borderRadius="30px",t.onmouseenter=function(e){this.style.background="red",this.style.border="3px solid red"},t.onmouseleave=function(e){this.style.background="unset",this.style.border="3px white solid"},t});t[0].addEventListener("click",n),t[1].addEventListener("click",o),e.appendChild(t[0]),e.appendChild(t[1]);var r=setInterval(function(t){document.querySelectorAll(".big-photo").length>0&&(document.querySelector(".big-photo").appendChild(e),clearInterval(r))})}}});