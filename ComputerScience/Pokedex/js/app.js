let pokemonArray = [];

window.onload = () => {
    document.querySelector("#pokedex-form").addEventListener("submit", getFormData);
}

const getFormData = (evt) => {
    evt.preventDefault();

    let p_name = document.querySelector("#name").value;
    let p_type = document.querySelector("#type").value;
    let p_number = document.querySelector("#number").value;
    let p_height = document.querySelector("#height").value;
    let p_weight = document.querySelector("#weight").value;
    let p_image = document.querySelector("#image").value;

    let pokemon = {
        name: p_name,
        type: p_type,
        number: p_number,
        height: p_height,
        weight: p_weight,
        image: p_image
    };

    pokemonArray.push(pokemon);
    document.querySelector("#pokedex-form").reset();

    listPokemon();

    return false;
}

const listPokemon = () => {
    document.getElementById("list").innerHTML = '';

    for(var i = 0; i < pokemonArray.length; i++) {

        let div = document.createElement("div");
        div.classList.add("column", "is-4");

        let card = document.createElement("div");
        card.classList.add("card");
        

        let cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        let figure = document.createElement("figure");
        figure.classList.add("image", "is-square", "has-backgorund-light");
        figure.innerHTML = '<img src=" ' + pokemonArray[i].image +' ">'

        cardImage.append(figure);

        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        let hTitle = document.createElement("h2");
        hTitle.classList.add("is-size-4", "has-text-weight-bold");
        hTitle.innerText = pokemonArray[i].name;

        cardContent.append(hTitle);

        let p1 = document.createElement("p")
        p1.innerHTML = '<b>Número: '+ pokemonArray[i].number  + '</b>';
        cardContent.append(p1)

        let p2 = document.createElement("p")
        p2.innerHTML = '<b>Altura: '+ pokemonArray[i].height  + ' m</b>';
        cardContent.append(p2)

        let p3 = document.createElement("p")
        p3.innerHTML = '<b>Peso: '+ pokemonArray[i].weight  + ' kg</b>';
        cardContent.append(p3)


        let tSpan = document.createElement("span");
        tSpan.classList.add("tag","is-link");
        tSpan.innerText = pokemonArray[i].type;

        cardContent.append(tSpan);

        card.append(cardImage);
        card.append(cardContent);
        
        div.append(card);

        // ------- Agregar ------ //
        document.getElementById("list").append(div);
    }
}