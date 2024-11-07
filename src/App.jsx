import "./app.css";
import { NavBarComponent } from "./components/NavBar/navbarComponent";
import { PokemonCardComponent } from "./components/PokemonCardComponent";
import { PokemonSearchComponent } from "./components/pokemonSearchComponent";


export const App = () => {

  const apiInformation = {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/"
      },
      {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
      },
      {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/"
      },
      {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/"
      },
      {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/"
      },
      {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
      },
      {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
      },
      {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
      },
      {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
      },
      {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/"
      }
    ]
  }

  return (
    <> {/* React.Fragment  o Fragment */}
      <header className="header">
        <NavBarComponent />
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <h1>The RESTful Pokémon API</h1>
        <h2> Serving over 2.5 billion API calls each month!</h2>
        <p>All the Pokémon data you'll ever need in one place,
          easily accessible through a modern free open-source RESTful API.</p>
      </header>
      <section>
        {apiInformation.results.map((pokemon,index) => {
          return <PokemonCardComponent key={index} name={pokemon.name} url={pokemon.url} />
        })}
      </section>
      <section>
        <h4>Search Pokemon</h4>
        <PokemonSearchComponent apiInformation={apiInformation} />
      </section>
    </>
  )
}


