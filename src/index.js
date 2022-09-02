console.log("Hello World");

// // TODO
// Import WishList from wishlist.js

import WishList from './wishlist.js';

let wishlist = new WishList();


// Select the form
let form = document.querySelector("#submitForm");
// Select the input for car make
let makeInput = document.querySelector("#makeInput");
// Select the input for car model
let modelInput = document.querySelector("#modelInput");
// Select the input for car year
let yearInput = document.querySelector("#yearInput");
// Select the paragraph element for car make
let carMakeP  = document.querySelector("#car-make");
// Select the paragraph element for car model
let carModelP = document.querySelector("#car-model");
let carYearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let wishListUl = document.querySelector("#wishListUl");


form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);


// Select the paragraph element for car year
// Select the remove button
// Select the wishlist unordered list element
// Call the WishList constructor to create an instance from the WishList class

function showCarDetails (car) {
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car>id); 

}

function updateDOMList () {
    wishListUl.innerHTML = "";
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        wishListUl.appendChild(li);
    });
}

function addCar (event) {
    event.preventDefault();
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    wishlist.add(make, model, year);
    updateDOMList();
} 

function removeCar () {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMakeP.textContent = "";
    carModelP.textContent = "";
    carYearP.textContent = "";
    removeBtn.disabled = true;
}
