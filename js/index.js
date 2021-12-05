document.addEventListener("scroll", function(){
    var positionY = window.pageYOffset;
    var navbar = document.getElementById("nav");
    if(positionY != 0) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-light");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-light");
    } 
});



let community = document.getElementById("conteudoMC");
let park = document.getElementById("conteudoVP");
let safeground = document.getElementById("conteudoSG");

let buttonCommunity = null;
let buttonPark = null;
let buttonSafeground = null;

document.getElementById("community").addEventListener("click", () => {
    buttonCommunity = document.getElementById("community");
    buttonPark = null;
    buttonSafeground = null;
    callProject(community, park, safeground);
});

document.getElementById("park").addEventListener("click", () => {
    buttonCommunity = null
    buttonPark = document.getElementById("park");
    buttonSafeground = null;
    callProject(community, park, safeground);
});

document.getElementById("safeground").addEventListener("click", () => {
    buttonCommunity = null
    buttonPark = null;
    buttonSafeground = document.getElementById("safeground");
    callProject(community, park, safeground);
});

function callProject(project, project2, project3) {
    if (buttonCommunity != null) {
        project.style.display = "block";
        project2.style.display = "none";
        project3.style.display = "none";
        project.classList.add("effect-project");
    } else if (buttonPark != null) {
        project.style.display = "none";
        project2.style.display = "block";
        project3.style.display = "none";
        project2.classList.add("effect-project");
    } else {
        project.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "block";
        project3.classList.add("effect-project");
    }
}