import "./contact.css";

export function loadContact() {
  const content = document.getElementById("content");
  const title = document.createElement("article");
  title.textContent = "Contact Us";
  content.appendChild(title);
  const aboutUs = document.createElement("article");
  const name = document.createElement("div");
  const address = document.createElement("div");
  const contactMethod = document.createElement("div");
  name.textContent = "Trattoria Bella Italia";
  address.textContent =
    "Address:\n Via Roma, 123 Florence, Tuscany 50123 Italy";
  contactMethod.textContent =
    "Phone:\n +39 123 456 789 \n   Email:  \n info@trattoriabellaitalia.com";
  aboutUs.appendChild(name);
  aboutUs.appendChild(address);
  aboutUs.appendChild(contactMethod);

  content.append(aboutUs);
}
