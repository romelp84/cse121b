/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {



/* Populate Profile Object with placesLive objects */

name: "Romel Patino",
photo: "images/IMG_0939.jpg",
favoriteFoods: ["Argentinian Churrasco", "Bandeja Paisa", "Pizza"],
hobbies: ["Reading", "Hiking", "Coding"],
placesLived: []
};
myProfile.placesLived.push({
    place: 'Otavalo, Ecuador',
    length: '17 years'
  });
myProfile.placesLived.push({
    place: 'Washington DC, USA',
    length: '5 years'
  });
myProfile.placesLived.push({
    place: 'Otavalo, Ecuador',
    length: '15 years'
  });


/* DOM Manipulation - Output */
document.getElementById('name').textContent = myProfile.name;
/* Name */
document.getElementById('photo').alt = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */

let placesLivedDL = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  placesLivedDL.appendChild(dt);
  placesLivedDL.appendChild(dd);
});
