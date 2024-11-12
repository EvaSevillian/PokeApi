
export const PokemonSearchComponent = (props) => {


    const buttonPokemonSearchHandler = () => {
        let AllPokemonNames = props.apiInformation.results.map((pokemon, index) => {
            return pokemon.name
        })

        let userInputvalue = ""
        const pokemonInput = document.getElementById("pokemonInput")
        userInputvalue = pokemonInput.value

        const searchPokemonResult = AllPokemonNames.filter(pokemonName => {
            return pokemonName === userInputvalue
        })

        if (searchPokemonResult.length === 0) {
            alert("No existe el pokemon que buscas")
        }

    }


    return <>
        <input id="pokemonInput" type="text" placeholder="Busca un pokemon" />
        <button type="submit" onClick={buttonPokemonSearchHandler}>Buscar</button>
    </>
}