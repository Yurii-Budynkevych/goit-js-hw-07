import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const elements = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", elements);
galleryEl.addEventListener("click", onClick);
function onClick(eve) {
  eve.preventDefault();
  if (eve.target.nodeName !== "IMG") {
    return;
  }
  const src = eve.target.dataset.source;
  const instance = basicLightbox.create(`
<img src="${src}" width = "800" height = "800"/>
`);
  instance.show();
}
