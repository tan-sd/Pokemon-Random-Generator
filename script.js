const pokemonName = document.getElementById('pokeName');
const id = document.getElementById('id');
const button = document.querySelector( '.button');

button.addEventListener("click", (e) => {
    e.preventDefault()
    id.classList.add('no-after')
    pokemonName.classList.add('no-after')
    pokemonName.innerHTML = '<em>Loading...</em>'
    id.innerHTML = '<em>Loading...</em>'

    const randomNumber = Math.ceil(Math.random() * 905);
    // console.log(randomNumber);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data['name']);
    //   console.log(data['id']);
      pokemonName.innerText = data['name'];
      id.innerText = data['id'];
    });
  
    document.getElementById('pokeImg').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`
});