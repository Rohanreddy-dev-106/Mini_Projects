// Profile Image
const customerImage = document.querySelector(".card-body img");

// Name
const customerName = document.querySelector(".card-body h4");

// Membership/Subtitle
const customerMembership = document.querySelector(".card-body p");

// Email
const customerEmail = document.querySelector(".list-group-item:nth-child(1)");

// Phone
const customerPhone = document.querySelector(".list-group-item:nth-child(2)");

// Address
const customerAddress = document.querySelector(".list-group-item:nth-child(3)");

// "View Details" button
const viewDetailsBtn = document.querySelector(".card-body a");

// Function to fetch and update customer details
function Getdetails(id) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    let json = JSON.parse(request.responseText);
    console.log(json);

    const {
      image,
      firstName,
      lastName,
      email,
      phone,
      address: { city, state, address }
    } = json;

    // Update DOM
    customerImage.src = image;
    customerName.textContent = `${firstName} ${lastName}`;
    customerMembership.textContent = "Premium Member";
    customerEmail.innerHTML = `<strong>Email:</strong> ${email}`;
    customerPhone.innerHTML = `<strong>Phone:</strong> ${phone}`;
    customerAddress.innerHTML = `<strong>Address:</strong> ${address}, ${city}, ${state}`;
  });
}

// Input field event listener
const inputField = document.getElementById("customerIdInput");

inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const enteredId = inputField.value.trim();
    if (enteredId) {
      Getdetails(enteredId);
    }
  }
});
