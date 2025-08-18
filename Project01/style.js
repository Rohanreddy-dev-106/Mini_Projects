// Movie data array with name and price
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
  { movieName: "RRR", price: 6 },
  { movieName: "Pushpa: The Rise", price: 5 },
  { movieName: "Sarkaru Vaari Paata", price: 5 },
  { movieName: "Ala Vaikunthapurramuloo", price: 4 },
  { movieName: "Bhadragiri", price: 3 },
  { movieName: "Saaho", price: 6 },
  { movieName: "Jai Lava Kusa", price: 4 },
  { movieName: "Magadheera", price: 5 },
  { movieName: "Bommarillu", price: 3 }
];

// DOM elements
const menue = document.querySelector("#selectMovie"); // Dropdown for movies
const Movie = document.querySelector("#movieName"); // Display selected movie name
const moviePriceEl = document.querySelector("#moviePrice"); // Display selected movie price
const availableSeats = document.querySelectorAll(".seat:not(.occupied)"); // All unoccupied seats
const totalPrice = document.querySelector("#totalPrice"); // Total price element
const selectedSeatsHolder = document.querySelector(".selectedSeatsHolder") // Display selected seats
const numberOfSeat = document.querySelector("#numberOfSeat"); // Number of selected seats
const date = document.querySelector(".date"); // Display current date
let selectedSeats = []; // Array to store selected seat indexes

// Set current date
let day = new Date();
date.textContent = `${day.getDate()} ${day.getMonth() + 1},${day.getFullYear()}`;

// Populate dropdown with movies
moviesList.forEach((element) => {
  let option = document.createElement("option");
  option.value = element.movieName;
  option.textContent = `${element.movieName} $ ${element.price}`;
  menue.appendChild(option)
})

let findmovie = moviesList[0]; // Default selected movie
totalPrice.textContent = `$${findmovie.price}`; // Set initial total price

// Update movie info when dropdown changes
function moviedata(event) {
  findmovie = moviesList.find((value) => value.movieName === event.currentTarget.value);
  if (findmovie) {
    Movie.textContent = findmovie.movieName;
    moviePriceEl.textContent = `$ ${findmovie.price}`;
  }
  totalPrice.textContent = `$${findmovie.price * selectedSeats.length || 1}`; // Update total price based on selected seats
}
menue.addEventListener("change", moviedata);

// Seat selection handler
function selectsets(event, index) {
  if (event.currentTarget.classList.contains("selected")) {
    event.currentTarget.classList.remove("selected");
    selectedSeats = selectedSeats.filter((value) => {
      return value !== index; // Remove seat from selection
    })
  } else {
    event.currentTarget.classList.add("selected");
    selectedSeats.push(index); // Add seat to selection
  }

  totalPrice.textContent = `$${findmovie.price * selectedSeats.length}`; // Update total price
  updatesets(); // Update UI with selected seats
  numberOfSeat.textContent = selectedSeats.length; // Update seat count
}

// Add click event to all unoccupied seats
availableSeats.forEach((element, index) => {
  element.addEventListener("click", (e) => selectsets(e, index));
});

// Update selected seats display
function updatesets() {
  selectedSeatsHolder.innerHTML = ""; // Clear previous selected seats
  selectedSeats.forEach((value) => {
    let span = document.createElement("span");
    span.classList.add("box");
    span.textContent = value;
    selectedSeatsHolder.appendChild(span); // Add new selected seat
  });
}


//Add eventLsiter to continue Button
const proceedBtn=document.querySelector("#proceedBtn")
proceedBtn.addEventListener("click",(event)=>{
  if (selectedSeats.length==0) {
    alert("Oops no seat Selected");
  }
  else{
    alert("Yayy! Your Seats have been booked");
  }
  selectedSeats.forEach((i,index)=>{
    availableSeats[i].classList.remove("selected");
    availableSeats[i].classList.add("occupied");
    availableSeats[i].removeEventListener("click", (e) => selectsets(e, index));
  })
    selectedSeatsHolder.innerHTML = '<span><p>No seat Selected</p></span>';

    selectedSeats = [];
    numberOfSeat.textContent = 0;

    totalPrice.textContent = `$0`;
})

//Add eventListerner to Cancel Button
const cancelBtn=document.querySelector("#cancelBtn")
cancelBtn.addEventListener("click",(event)=>{
   selectedSeats.forEach((i)=>{
    availableSeats[i].classList.remove("selected");
  })
    selectedSeatsHolder.innerHTML = '<span><p>No seat Selected</p></span>';

    selectedSeats = [];
    numberOfSeat.textContent = 0;

    totalPrice.textContent = `$0`;
})
