function makeGood(){
    document.getElementById("polk-pic").src ="img/good-polk.jpg";
    
    var hero = document.getElementById("hero");
    var demon = document.getElementById("demon");
    hero.style.color ="blue";
    hero.style.fontWeight = "bold";
    setTimeout(returnToNormal, 3000);


}

function makeBad(){
    document.getElementById("polk-pic").src ="img/evil-polk.jpg";
    var demon = document.getElementById("demon");
    var hero = document.getElementById("hero");
    demon.style.color ="red";
    demon.style.fontWeight = "bold";
    setTimeout(returnToNormal, 3000);

}

function returnToNormal(){
    document.getElementById("polk-pic").src ="img/James-Polk.jpeg";
    hero.style.color = "black";
    hero.style.fontWeight = "normal";
    demon.style.color ="black";
    demon.style.fontWeight = "normal";  
}