// alert("Ye phili dafa kaam kai hai ")

// let elemenid = document.querySelector("p")
// console.dir(elemenid)
// let elemencls = document.getElementsByClassName("myhead")
// console.dir(elemencls)

// let head = document.querySelector("h1")
// head.innerText = head.innerText +  "saad"


// let id = document.querySelector("p")
// // console.log(id.getAttribute("my-para"))
// console.log(id.setAttribute("class" , "Dangar"));
let div = document.querySelector("div")
div.style.backgroundColor = "Green"
div.style.backgroundColor = "red"
div.style.color = "Green"
div.style.fontSize = "65px"
div.style.padding = "5px"
div.style.minHeight = "30vh" 

let butn = document.createElement("button");
butn.innerText = "click me";
butn.style.border = "solid 3 px";
console.log("butn");

let divi = document.querySelector("div")
divi.append(butn);

let newheading = document.createElement("h1")
newheading.innerHTML =  "<i><b>My name is Saad Bin RIaz</b></i>"
document.querySelector("body").prepend(newheading)
