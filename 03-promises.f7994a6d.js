function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var u=r("7Y9D8");const i=document.querySelector("[name=delay]"),l=document.querySelector("[name=step]"),d=document.querySelector("[name=amount]"),a=(document.querySelector(".submit_button"),document.querySelector(".form"));function c(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector(".form");a.addEventListener("submit",(function(o){o.preventDefault();const t=Number(d.value),n=Number(i.value),r=Number(l.value);for(let o=0;o<t;o++){c(o+1,n+o*r).then((({position:o,delay:t})=>{e(u).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(u).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.f7994a6d.js.map