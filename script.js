document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("banner");
  const row = document.querySelector(".row");
  const vue = document.querySelector(".vue");
  const pinia = document.querySelector(".pinia");
  const tailwind = document.querySelector(".tailwind");
  const vite = document.querySelector(".vite");
  const electron = document.querySelector(".electron");
  window.onload = function () {
    banner.classList.remove("filter");
  };
  vite.onload = function () {
    row.classList.remove("filter");
  };
  banner.src = "./lg-tech-feature-banner.jpg";
  vue.src = "./lg/vue-logo.svg";
  pinia.src = "./lg/pinia-logo.svg";
  tailwind.src = "./lg/tailwind-logo.svg";
  vite.src = "./lg/vite-logo.svg";
  electron.src = "./lg/electron-logo.svg";
});
