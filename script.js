import { getJSONData } from "./utils.js";

let photographers = await getJSONData("photographers");

showPhotographers(photographers);

function showPhotographers(jsonData) {
  for (let data of jsonData) {
    let art = document.createElement("article");
    let page = document.createElement("a");
    let title = document.createElement("h2");
    let city = document.createElement("p");
    let tagline = document.createElement("p");
    let price = document.createElement("p");
    page.href = `./photographer.html?id=${data.id}`;
    title.textContent = data.name;
    city.textContent = `${data.city}, ${data.country}`;
    tagline.textContent = data.tagline;
    price.textContent = `${data.price}€/jour`;
    page.append(title);
    art.append(page, city, tagline, price);
    document.querySelector(".root").appendChild(art);
  }
}
