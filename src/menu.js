import "./menu.css";
import background from "./background-image.jpg";
import ossobucoImage from "./Ossobuco.jpg";
import focacciaImage from "./Focaccia.jpg";
import gelatoImage from "./Gelato.jpg";

export function loadMenu() {
  const content = document.getElementById("content");
  const title = document.createElement("article");
  title.textContent = "Menu";
  content.appendChild(title);

  // Menu 1
  const menu_1 = document.createElement("article");
  const name_1 = document.createElement("div");
  name_1.textContent = "Ossobuco alla Milanese    -  40 € ";
  menu_1.appendChild(name_1);

  const ossobuco = new Image();
  ossobuco.src = ossobucoImage;
  menu_1.appendChild(ossobuco);
  const menu_1_desc = document.createElement("p");
  menu_1_desc.textContent =
    "This classic Italian dish features tender, slow-braised veal shanks, simmered to perfection in a savory blend of white wine, tomatoes, onions, and aromatic herbs. The marrow-filled bone at the center of each succulent shank adds a luxurious depth of flavor that pairs perfectly with our saffron-infused risotto. ";
  menu_1.appendChild(menu_1_desc);
  content.appendChild(menu_1);

  //   // Menu 2
  const menu_2 = document.createElement("article");
  const name_2 = document.createElement("div");
  name_2.textContent = "Focaccia Rustica    -  25 €  ";
  menu_2.appendChild(name_2);

  const focaccia = new Image();
  focaccia.src = focacciaImage;
  menu_2.appendChild(focaccia);

  const menu_2_desc = document.createElement("p");
  menu_2_desc.textContent =
    "Our Focaccia Rustica is generously drizzled with extra virgin olive oil and adorned with fragrant rosemary, sea salt, and a medley of fresh herbs. Each bite is a journey to the rustic countryside of Italy. Perfect as an appetizer, a side, or a meal in itself.";
  menu_2.appendChild(menu_2_desc);
  content.appendChild(menu_2);

  //   // Menu 3
  const menu_3 = document.createElement("article");
  const name_3 = document.createElement("div");
  name_3.textContent = "Artisan Gelato Delights  - 10 €";
  menu_3.appendChild(name_3);

  const gelato = new Image();
  gelato.src = gelatoImage;
  menu_3.appendChild(gelato);

  const menu_3_desc = document.createElement("p");
  menu_3_desc.textContent =
    "Our gelato is lovingly crafted using traditional methods and only the finest ingredients, ensuring a taste that's pure magic. Whether you're in the mood for the velvety richness of dark chocolate, the refreshing tang of fruit sorbet, or the timeless elegance of creamy vanilla.";
  menu_3.appendChild(menu_3_desc);

  content.appendChild(menu_3);
}
