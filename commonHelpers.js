import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const y="/practice-js-vite/assets/javascript-8dac5379.svg",d={email:"user@mail.com",password:"secret"},m=document.querySelector(".login-form"),n=document.querySelector(".login-btn"),r=document.querySelector("[name='email']"),o=document.querySelector("[name='password']");m.addEventListener("submit",s=>{if(s.preventDefault(),n.textContent==="Logout"){n.textContent="Login",localStorage.removeItem("userData"),m.reset(),r.removeAttribute("readonly"),o.removeAttribute("readonly");return}if(r.value.trim()===""||o.value.trim()===""){c.warning({message:"Заповніть всі поля",iconUrl:y});return}if(r.value!==d.email||o.value!==d.password){c.error({message:"Дані не вірні"});return}c.success({message:"All ok your login!"});const a={email:r.value,password:o.value};localStorage.setItem("userData",JSON.stringify(a)),n.textContent="Logout",r.setAttribute("readonly",!0),o.setAttribute("readonly",!0)});const g=localStorage.getItem("userData");if(g){const s=JSON.parse(g);r.value=s.email,o.value=s.password,n.textContent="Logout",r.setAttribute("readonly",!0),o.setAttribute("readonly",!0)}const l=document.querySelector(".switcher-toggle");localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark"),document.body.classList.remove("light"),l.checked=!0);const p=()=>{l.checked?(document.body.classList.add("dark"),document.body.classList.remove("light"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"),localStorage.setItem("theme","light"))};l.addEventListener("change",p);
//# sourceMappingURL=commonHelpers.js.map