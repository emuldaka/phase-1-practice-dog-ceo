console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => {
    const dogImageContainer = document.querySelector("#dog-image-container");
    data.message.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      dogImageContainer.appendChild(imgElement);
    });
  });

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    const breedList = document.querySelector("#dog-breeds");
    breedList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "red";
      }
    });
    breeds.forEach((breed) => {
      //if (breed.startsWith(selectedLetter)) {
      const li = document.createElement("li");
      li.textContent = breed;
      breedList.appendChild(li);
      //}
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const breedDropdowns = document.querySelector("#breed-dropdown");
  const breedLists = document.querySelector("#dog-breeds");

  breedDropdowns.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;

    const breedItems = breedLists.querySelectorAll("li");

    breedItems.forEach((breedItems) => {
      const breedName = breedItems.textContent;
      if (breedName.startsWith(selectedLetter)) {
        breedItems.style.display = "block";
      } else {
        breedItems.style.display = "none";
      }
    });
  });
});
