function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequire7bc7=o);var i=o("7Y9D8");const a=document.querySelector(".form"),s=a.querySelector('button[type="submit"]');a.addEventListener("submit",(async r=>{r.preventDefault();const t=parseInt(a.elements.delay.value),n=parseInt(a.elements.step.value),o=parseInt(a.elements.amount.value);if(isNaN(t)||isNaN(n)||isNaN(o)||t<=0||n<0||o<0)return e(i).Report.warning("Error!","Incorrect input values. Enter positive numbers","Try again");s.disabled=!0;try{const r=Array.from({length:o},((e,r)=>{return o=r,i=t+n*r,new Promise(((e,r)=>{const t=Math.random()>.3;setTimeout((()=>{t?e({position:o+1,delay:i}):r({position:o+1,delay:i})}),i)}));var o,i}));await Promise.all(r.map((r=>r.then((({position:r,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${t}ms`)})).catch((({position:r,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${t}ms`)}))))),s.disabled=!1}catch(r){e(i).Notify.failure("An unexpected error occurred. Please try again later."),console.error(r)}}));
//# sourceMappingURL=03-promises.3004e278.js.map