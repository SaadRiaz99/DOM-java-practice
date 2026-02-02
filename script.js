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

let li = document.createElement("li")
li.innerText = "My List"


let ulo = document.getElementById("oopo")
ulo.innerText = "ata"
ulo.appendChild(li)

function alati(){
    alert("Sahi hai  bhai kia kar raha hai ")
}

let butt = document.getElementById("buttoni")
butt.addEventListener("mouseover" , function wah() {
    butt.innerText = "Wah Chachu"
    butt.style.backgroundColor = "grey"
    
})
butt.addEventListener("mouseleave" , function chacu() {
    butt.innerText = "jaa yar"
    butt.style.backgroundColor = "red"
    
})
let but = document.getElementById("butto")
but.click =  ( e ) => {
    console.log(e)
}


// let butn2 = document.getElementById("but")
// butn2.addEventListener("click" , function mess() {
//     butn2.innerText = "Saad Bin Riaz"
//     butn2.style.backgroundColor = "Red"
    
    
//     })
// ) => {
//         console.log(e)
//     }

let butn2 = document.getElementById("but")
butn2.onclick = (evt) =>{
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)

}

