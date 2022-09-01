
let feedback=document.querySelector(".feedback")

let answer=document.querySelector(".answer");

let sumbit=document.getElementById("sumbit")
let rating=document.getElementById("rating-again")

let btn= document.querySelectorAll(".btn")
let rates=document.querySelector(".rates")
sumbit.addEventListener("click" , ()=>{
      
    answer.classList.remove("hidden")
    feedback.style.display="none"

})

rating.addEventListener("click", ()=>{

    answer.classList.add("hidden")
    feedback.style.display="block"
})


btn.forEach((rate) =>{
    rate.addEventListener("click" ,()=>{
        rates.innerHTML=rate.innerHTML
    })
})





