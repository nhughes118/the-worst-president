
$(document).ready(function(){

    var virtueScore = 0;

    var goodPrez = document.getElementsByClassName("good-president");
    for (var i = 0; i < goodPrez.length; i++) {
        goodPrez[i].addEventListener('click', makeGood);
    }

    var badPrez = document.getElementsByClassName("bad-president");
    for (var i = 0; i < badPrez.length; i++) {
        badPrez[i].addEventListener('click', makeBad);
    }

    function makeGood(){
        virtueScore += 1;
        console.log(virtueScore);
        document.getElementById("polk-pic").src ="img/good-polk.jpg";  
        var hero = document.getElementById("hero");
        var demon = document.getElementById("demon");
        hero.style.color ="blue";
        hero.style.fontWeight = "bold";
        setTimeout(returnToNormal, 1000);
        if (virtueScore >= 3){
            virtueScore = 0;
            //$("#js-sub").html("<h2>Hero President<h2>");
            //$("#polk-pic").slideUp();
        }
    }

    function makeBad(){
        virtueScore -= 1;
        console.log(virtueScore);
        document.getElementById("polk-pic").src ="img/evil-polk.jpg";
        var demon = document.getElementById("demon");
        var hero = document.getElementById("hero");
        demon.style.color ="red";
        demon.style.fontWeight = "bold";
        setTimeout(returnToNormal, 1000);
        if (virtueScore <= -3 ){
            virtueScore = 0;
            //$("#js-sub").html("<h2>Evil Demon<h2>");
            //$("#polk-pic").slideDown();
        }
    }

    function returnToNormal(){
        document.getElementById("polk-pic").src ="img/James-Polk.jpeg";
        if(hero){
            hero.style.color = "black";
            hero.style.fontWeight = "normal";
        }
        if(demon){
            demon.style.color ="black";
            demon.style.fontWeight = "normal";  
        }

    }

});