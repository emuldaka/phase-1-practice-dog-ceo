console.log("%c HI", "color: firebrick");

const imageContainer = document.querySelector("#image-container");

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((response) => response.json())
  .then((data) => {
    data.message.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      imageContainer.appendChild(img);
    });
  });

const breedList = document.querySelector("#breed-list");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      breedList.appendChild(li);
    });
  });

breedList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.color = "red";
  }
});

const breedDropdown = document.querySelector("#breed-dropdown");

breedDropdown.addEventListener("change", (event) => {
  const selectedLetter = event.target.value;
  breedList.innerHTML = "";
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      breeds.forEach((breed) => {
        if (breed.startsWith(selectedLetter)) {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        }
      });
    });
});
