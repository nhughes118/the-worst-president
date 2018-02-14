function goodFunc(){
    document.getElementById("polk-pic").src ="img/good-polk.jpg";
    
    var hero = document.getElementById("hero");
    var demon = document.getElementById("demon");
    hero.style.color ="blue";
    hero.style.fontWeight = "bold";
    demon.style.color ="black";
    demon.style.fontWeight = "normal";  

}

function badFunc(){
    document.getElementById("polk-pic").src ="img/evil-polk.jpg";
    var demon = document.getElementById("demon");
    var hero = document.getElementById("hero");
    demon.style.color ="red";
    demon.style.fontWeight = "bold";
    hero.style.color = "black";
    hero.style.fontWeight = "normal";
}