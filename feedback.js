const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEL= document.getElementById("container")

let selectedRating="";

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", ()=> {
    removeAactive();
    selectedRating = event.target.parentNode.innerText
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", ()=>{
    if(selectedRating!== ""){
      containerEL.innerHTML = `
      <strong> Thank you! </strong>
      <br>
      <br>
      <strong> feedback: ${selectedRating} </strong>
      <p> We'll use your feedback to improve our customer support.</p>
      `
    }
})

function removeAactive(){
    ratingEls.forEach((ratingEl)=>{
    ratingEl.classList.remove("active");
    });
}