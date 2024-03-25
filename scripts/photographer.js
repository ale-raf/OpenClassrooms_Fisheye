import {
  getJSONData,
  compareMediaByLikes,
  compareMediaByTitle,
  compareMediaByDate,
} from "./utils.js";

const select = document.querySelector("#media__sort");
const nameElt = document.querySelector(".photographer h2");
const placeElt = document.querySelector(".photographer h3");
const taglineElt = document.querySelector(".photographer p");
const likesElt = document.querySelector("aside p span:first-child");
const priceElt = document.querySelector("aside p span:last-child");

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const photographers = await getJSONData("photographers");

const media = await getJSONData("media");

const photographer = photographers.filter(
  (photographer) => photographer.id == id
);

const photographerMedia = media
  .filter((media) => media.photographerId === photographer[0].id)
  .sort((a, b) => b.likes - a.likes);

let totalLikes = photographerMedia.reduce((acc, curr) => acc + curr.likes, 0);

showPhotographer(photographer);

showGallery(photographerMedia);

function showPhotographer(photographer) {
  for (let data of photographer) {
    nameElt.textContent = data.name;
    placeElt.textContent = `${data.city}, ${data.country}`;
    taglineElt.textContent = data.tagline;
    likesElt.textContent = `${totalLikes} ❤️`;
    priceElt.textContent = `${data.price}€ / jour`;
  }
}

function showGallery(media) {
  let div = document.createElement("div");
  div.className = "gallery";
  for (let photo of media) {
    let art = document.createElement("article");
    let span = document.createElement("span");
    let title = document.createElement("h3");
    let likes = document.createElement("p");
    title.textContent = photo.title;
    likes.textContent = `${photo.likes} ❤️`;
    span.append(title, likes);
    art.append(span);
    div.appendChild(art);
    document.querySelector(".root").appendChild(div);
  }
}

select.addEventListener("change", sortMediaByValue);

function sortMediaByValue(e) {
  document.querySelector(".gallery").remove();
  switch (e.target.value) {
    case "likes":
      photographerMedia.sort(compareMediaByLikes);
      break;
    case "title":
      photographerMedia.sort(compareMediaByTitle);
      break;
    case "date":
      photographerMedia.sort(compareMediaByDate);
      break;
  }
  showGallery(photographerMedia);
}
