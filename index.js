// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName == name && contacts[i].likes == prop){
      return `FirstName: ${name} & Likes: ${prop}` 
    } else if (contacts[i].firstName !== name && contacts[i].likes !== prop){
      return "Not found!"
    }
    // console.log(contacts[i].firstName)
  }
  // Only change code above this line
}
lookUpProfile("Akira", "likes")
console.log(lookUpProfile("Akira", "likes"));