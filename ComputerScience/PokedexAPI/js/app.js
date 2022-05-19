let allPokemon = [];

window.onload = () => {

    fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
    .then(response => response.json())
    .then(data => {
        allPokemon = data;
        listAllPokemon(data);
    });

    document.querySelector("#search").addEventListener("keyup", (evt) => {
        
        if (evt.target.value.length >= 3) {

            // let result = [];
            // for (var i = 0; i < allPokemon.length; i++) {

            //     if (allPokemon[i].name.toLowerCase().includes(evt.target.value.toLowerCase())) {
            //         result.push(allPokemon[i]);
            //     }
            // }

            let result = allPokemon.filter( (pokemon) => 
                pokemon.name.toLowerCase().includes(evt.target.value.toLowerCase())
            );

            console.log(result);
            
            listAllPokemon(result);
        }

        else {
            listAllPokemon(allPokemon);
        }
    });

    document.querySelector("#water").addEventListener("click", (evt) => {
        let result = allPokemon.filter( (pokemon) => 
            pokemon.type.includes("water") && pokemon.type.length == 1
        );
            
        listAllPokemon(result);
    });

    document.querySelector("#two-types").addEventListener("click", (evt) => {
        let result = allPokemon.filter( (pokemon) => 
            pokemon.type.length == 2
        );
            
        listAllPokemon(result);
    });

    document.querySelector("#grass").addEventListener("click", (evt) => {
        let result = allPokemon.filter( (pokemon) => 
            pokemon.type.includes("grass") && pokemon.type.length == 1
        );
            
        listAllPokemon(result);
    });

    
}


function listAllPokemon(allPokemon) {
  
    document.getElementById("list").innerHTML = '';
    
    for (var i = 0; i < allPokemon.length; i++) {


        let div = document.createElement("div");
        div.classList.add("col-4", "mt-4")

        let card = document.createElement("div")
        card.classList.add("card")
        card.dataset.name = allPokemon[i].name;
        card.dataset.id = allPokemon[i].id;
        card.dataset.weight = allPokemon[i].weight;
        card.dataset.height = allPokemon[i].height;
        card.dataset.ThumbnailImage = allPokemon[i].ThumbnailImage;
        card.dataset.number = allPokemon[i].number;


        let cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.setAttribute("src", allPokemon[i].ThumbnailImage);


        let cardContent = document.createElement("div");
        cardContent.classList.add("card-body");

        let cTitle = document.createElement("h5");
        cTitle.innerText=allPokemon[i].name;

        cardContent.append(cTitle);

        let typeArray = allPokemon[i].type;
        card.dataset.type = allPokemon[i].type;

        for(var j = 0 ; j < typeArray.length; j++){

            let cSpan =  document.createElement("span");
            cSpan.classList.add("tag-color", "mr-1");

            cSpan.innerText = typeArray[j];
            var myColor= getColor(typeArray[j])
            cSpan.classList.add(myColor);
            cardContent.append(cSpan);
        }

        let p1 = document.createElement("p");
        p1.classList.add("pokemon-number");
        p1.innerHTML="<b>No. " + allPokemon[i].number + "</b>";
        cardContent.append(p1);

        card.append(cardImage);
        card.append(cardContent);

        div.append(card);

        document.getElementById("list").append(div);

        card.addEventListener("click", battle);

    }
} 

function battle(evt) {

    var info = evt.currentTarget.dataset;


}

function getColor(type){

    var colorClass;

    switch(type){
        case "grass":{
           colorClass="grass";
           break;
        }
        case "poison":{
           colorClass="poison";
           break;
        }
        case "fire":{
           colorClass="fire";
           break;
       }
       case "water":{
            colorClass="water";
            break;
        }
        case "psychic":{
            colorClass="psychic";
            break;
        }
        case "dark":{
            colorClass="dark";
            break;
        }
        case "bug":{
            colorClass="bug";
            break;
        }
        case "dragon":{
            colorClass="dragon";
            break;
        }
        case "electric":{
            colorClass="electric";
            break;
        }
        case "flying":{
            colorClass="flying";
            break;
        }
        case "ghost":{
            colorClass="ghost";
            break;
        }
        case "ground":{
            colorClass="ground";
            break;
        }
        case "ice":{
            colorClass="ice";
            break;
        }
        case "rock":{
            colorClass="rock";
            break;
        }
        case "steel":{
            colorClass="steel";
            break;
        }
        case "fairy":{
            colorClass="fairy";
            break;
        }
        default:{
            colorClass="normal";
        }
    }
    return colorClass;
}

// window.onload = function(){
//     document.getElementById("delete").addEventListener("click", function(){
//         document.querySelector("#popup").classList.toggle("is-active");
//     });
// }