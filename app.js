const img = document.querySelector("img");
const inputs = document.getElementById("input");

input.oninput = function () {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=OTiBIaW9hN1YAgxUxJdwpNO4ZUJi7OV9&s=${input.value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};
