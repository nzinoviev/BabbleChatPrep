const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
   const mySrc = myImage.getAttribute("src");
   if (mySrc === "images/babble-logo.png") {
      myImage.setAttribute("src", "images/generate-babble.png");
   } else {
      myImage.setAttribute("src", "images/babble-logo.png");
   }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
   const myName = prompt("Please, enter your name.");
   if (!myName) {
      setUserName();
   } else {
      localStorage.setItem("name", myName);
      myHeading.innerHTML = `BabbleChat home page<br> Welcome, ${myName}`;
   }
}

if (!localStorage.getItem("name")) {
      setUserName();
} else {
   const storedName = localStorage.getItem("name");
   myHeading.innerHTML = `BabbleChat home page<br> Welcome, ${storedName}`;
}

myButton.addEventListener("click", () => {
   setUserName();
});
