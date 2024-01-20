/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Romel Patino';
const currentYear = '2024';
const profilePicture = 'images/IMG_0939.jpg';



/* Step 3 - Element Variables */

const imageElement = document.querySelector('img');
const nameElement = document.getElementById('name');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year'); 


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */

let favoriteFoods = ['Hamburguer', 'Argentinian Churrazco', 'Bandeja paisa'];
foodElement.innerHTML = favoriteFoods.join('<br>');
let newFavoriteFood = 'Ice Cream';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;



