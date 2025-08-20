/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/
let images = [
    { url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/f1-the-movie-et00403839-1750674185.jpg" },
    { url: "https://i.pinimg.com/originals/4b/56/7b/4b567b59155bf6fdb9984b0a5a0c53c9.jpg" },
    { url: "https://m.media-amazon.com/images/S/pv-target-images/f75babdf2f712ed7724ca852047528db887e9968e8102b792cd9b257b2c51714.jpg" },
    { url: "https://i.ytimg.com/vi/o-cXNAwQ164/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6Lbqf4X1EVvqEY-K47USSb84xcA" }
];

let priv = document.querySelector("#prevButton");
let next = document.querySelector("#nextButton");
let img = document.getElementsByTagName("img")[0];
let count = 0;
img.src = images[count].url;
priv.addEventListener("click", (event) => {
    count--;
    count = (count < 0) ? 0 : count;
    setTimeout(() => {
        img.src = images[count].url;
    }, 500);
});
next.addEventListener("click", (event) => {
    count++;
    count = (count > images.length - 1) ? images.length - 1 : count;
    setTimeout(() => {
        img.src = images[count].url;
    }, 500);
})



