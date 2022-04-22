let showLinks = document.querySelector(".icon");
let links =  document.querySelector(".links ul");
let hidLinks = document.querySelector("#close");
let lIs = document.querySelectorAll(".header ul li")


console.log(hidLinks);

function widthe(x) {
    if (x.matches) {
    //   document.body.style.backgroundColor = "red";
    } else
    {
    //   document.body.style.backgroundColor = "green";
      showLinks.addEventListener("click", ()=>{
        links.style.display = "flex";
    })
    hidLinks.addEventListener("click", ()=>{
        links.style.display = "none";
    })
    lIs.forEach(li => {
        li.onclick = function () {
        links.style.display = "none";
        }
    });
    }
  }
  
  let max = window.matchMedia( "(min-width: 767px)" )
  
  widthe(max)
  
  max.addListener(widthe)