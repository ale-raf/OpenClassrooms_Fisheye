import { getJSONData } from "./utils.js";

let photographers = await getJSONData("photographers");

showPhotographers(photographers);

function showPhotographers(photographers) {
  for (let photographer of photographers) {
    let art = document.createElement("article");
    let page = document.createElement("a");
    let photo = document.createElement("img");
    let name = document.createElement("h2");
    let place = document.createElement("p");
    let tagline = document.createElement("p");
    let price = document.createElement("p");
    page.href = `./photographer.html?id=${photographer.id}`;
    photo.src = `./images/portraits/${photographer.portrait}`;
    name.textContent = photographer.name;
    place.textContent = `${photographer.city}, ${photographer.country}`;
    tagline.textContent = photographer.tagline;
    price.textContent = `${photographer.price}€/jour`;
    page.append(photo, name);
    art.append(page, place, tagline, price);
    document.querySelector(".root").appendChild(art);
  }
}
