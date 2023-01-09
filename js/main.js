// Add event listener for submit button
const button = document.getElementById("button").addEventListener("click", getPokemon);

// Run when submit button is clicked
async function getPokemon() {
    // Set variable to selected radio type option
    const pokemonType = document.querySelector("input[name='type']:checked").value;
    // console.log(pokemonType);

    // Set variable that waits on a fetch to respond with data
    const response = await fetch(`https://gleaming-cow-train.cyclic.app/api/all`);
    const data = await response.json();
    // console.log(data);

    // Create variable to store all Pokemon with a type equal to user selected pokemonType
    let potential = [];
    for (mon in data) {
        if (data[mon].type.includes(pokemonType)) {
            potential.push(data[mon]);
        }
    }
    // console.log(potential)

    // Randomly select Pokemon based on type selected
    const number = Math.floor(Math.random() * potential.length);
    const pokemon = potential[number];
    console.log(pokemon);

    // Display Pokemon
    document.getElementById("img").src = `${pokemon.image}`;
    document.getElementById("name").innerText = `${pokemon.name}`;
    document.getElementById("jp-name").innerText = `${pokemon.jpname}`;
    document.getElementById("type").innerText = `${pokemon.type}`;
    document.getElementById("gen").innerText = `Generation: ${pokemon.generation}`;
    document.getElementById("ability").innerText = `Ability: ${pokemon.ability}`;
    document.getElementById("num").innerText = `Number: ${pokemon.number}`;
}
