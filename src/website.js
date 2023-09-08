import "./website.css";
import background from "./background-image.jpg";
import { loadHome } from "./homePage.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact";

function nav() {
  const nav = document.createElement("nav");

  const home = document.createElement("div");
  home.textContent = "Home";
  home.id = "home";
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.id = "menu";
  const contact = document.createElement("div");
  contact.textContent = "Contact";
  contact.id = "contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function main() {
  const main = document.createElement("main");
  main.style.background = `url(${background}) repeat`;
  const content = document.createElement("div");
  content.id = "content";
  main.appendChild(content);
  return main;
}

function footer() {
  const footer = document.createElement("footer");
  return footer;
}

export function initialize() {
  document.body.appendChild(nav());
  document.body.appendChild(main());
  document.body.appendChild(footer());
  loadHome();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("home").addEventListener("click", function () {
    document.getElementById("content").textContent = "";
    loadHome();
  });
  document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("content").textContent = "";
    loadMenu();
  });
  document.getElementById("contact").addEventListener("click", function () {
    document.getElementById("content").textContent = "";
    loadContact();
  });
});
