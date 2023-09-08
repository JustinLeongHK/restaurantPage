import "./home.css";
import restaurantImage from "./restaurant.png";

export function loadHome() {
  const content = document.getElementById("content");
  const container = document.createElement("main");
  const title = document.createElement("article");
  title.textContent = "Welcome to Trattoria Bella Italia!";
  container.appendChild(title);

  const restaurantDesc = document.createElement("article");
  const subtitle1 = document.createElement("div");
  subtitle1.textContent = "Indulge in the Enchanting Flavors of Italy";
  restaurantDesc.appendChild(subtitle1);

  const restaurant = new Image();
  restaurant.src = restaurantImage;
  restaurantDesc.appendChild(restaurant);

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Step into a world of authentic Italian cuisine, where every dish tells a story and every bite is a journey to the heart of Italy. At Trattoria Bella Italia, we invite you to savor the rich and diverse flavors of this beautiful Mediterranean country.";
  restaurantDesc.appendChild(paragraph1);

  container.appendChild(restaurantDesc);

  const location = document.createElement("article");
  const subtitle2 = document.createElement("div");
  subtitle2.textContent = "Location";
  location.appendChild(subtitle2);
  const address = document.createElement("p");
  address.textContent = "Via Roma, 123, Florence, 50123, Tuscany, Italy";
  location.appendChild(address);
  container.appendChild(location);

  content.appendChild(container);
}
